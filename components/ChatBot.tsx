'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { X, Send, MessageCircle } from 'lucide-react';
import { addToCart } from '@/lib/cart';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
};

type Language = 'en' | 'np';

type ConversationState = {
  context: string | null; // tracks current conversation context
  step: number; // tracks conversation step
};

export default function ChatBot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [language, setLanguage] = useState<Language>('en');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState>({
    context: null,
    step: 0,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(getWelcomeMessage());
    }
  }, [isOpen]);

  const welcomeMessages = {
    en: "नमस्ते! I can help you find the right herbal blend. How are you feeling today?",
    np: "नमस्ते! म तपाईंलाई सही जडिबुटी फेला पार्न मद्दत गर्न सक्छु। तपाईं आज कस्तो महसुस गर्दै हुनुहुन्छ?",
  };

  const getWelcomeMessage = () => {
    return welcomeMessages[language];
  };

  const quickReplies = [
    { label: language === 'en' ? 'Respiratory Issues' : 'श्वासप्रश्वास समस्या', value: 'respiratory' },
    { label: language === 'en' ? 'Digestive Problems' : 'पाचन समस्या', value: 'digestive' },
    { label: language === 'en' ? 'General Wellness' : 'सामान्य स्वास्थ्य', value: 'wellness' },
    { label: language === 'en' ? 'View Products' : 'उत्पादनहरू हेर्नुहोस्', value: 'products' },
    { label: language === 'en' ? 'Talk to Expert' : 'विशेषज्ञसँग कुरा गर्नुहोस्', value: 'expert' },
    { label: language === 'en' ? 'Order Juice' : 'जुस अर्डर', value: 'order-juice' },
    { label: language === 'en' ? 'Order Powder' : 'पाउडर अर्डर', value: 'order-powder' },
  ];

  const placeOrder = (slug: string, name: string, form: string) => {
    addToCart({ slug, name, form, priceLabel: 'NPR 650' });
    router.push('/checkout');
  };

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(text, 'bot');
      setIsTyping(false);
    }, 800);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Handle conversation state - multi-turn dialog
    if (conversationState.context) {
      if (conversationState.context === 'respiratory_type') {
        // User is answering about dry or wet cough
        if (input.includes('dry') || input.includes('सुक्खा')) {
          setConversationState({ context: 'respiratory_occupation', step: 2 });
          if (language === 'en') {
            return "I see. Do you work outdoors or ride a bike/scooter daily? This helps me recommend the right product.";
          } else {
            return "मैले बुझें। के तपाईं बाहिर काम गर्नुहुन्छ वा बाइक/स्कुटर चलाउनुहुन्छ? यसले मलाई सही उत्पादन सिफारिस गर्न मद्दत गर्छ।";
          }
        } else if (input.includes('wet') || input.includes('chil') || input.includes('चिल्लो')) {
          setConversationState({ context: null, step: 0 });
          if (language === 'en') {
            return "For wet cough, the Sesbania sesban Juice is gentle and helps soothe throat irritation while supporting respiratory comfort.\n\nWould you like to learn more or talk to an expert?";
          } else {
            return "चिल्लो खोकीको लागि, Sesbania sesban Juice ले घाँटीको जलन कम गर्न र श्वासप्रश्वास सहज बनाउन मद्दत गर्छ।\n\nके तपाईं थप जान्न वा विशेषज्ञसँग कुरा गर्न चाहनुहुन्छ?";
          }
        } else {
          // User didn't answer clearly, ask again
          if (language === 'en') {
            return "Please let me know if it's a dry cough or wet cough so I can recommend the best product for you.";
          } else {
            return "कृपया मलाई बताउनुहोस् यो सुक्खा खोकी हो कि चिल्लो खोकी, ताकि म तपाईंलाई उत्तम उत्पादन सिफारिस गर्न सक्छु।";
          }
        }
      }

      if (conversationState.context === 'respiratory_occupation') {
        // User is answering about occupation/riding
        if (input.includes('yes') || input.includes('ride') || input.includes('bike') || input.includes('outdoor') || input.includes('बाइक') || input.includes('बाहिर') || input.includes('हो') || input.includes('छ')) {
          setConversationState({ context: null, step: 0 });
          if (language === 'en') {
            return "Perfect! Sesbania sesban Juice is designed for riders and people exposed to daily pollution. It helps:\n\n✓ Calm throat irritation\n✓ Support respiratory comfort\n✓ Provide mild antimicrobial support\n\nWould you like to:\n1. Learn more\n2. Talk to an expert\n3. Get the latest price";
          } else {
            return "उत्तम! Sesbania sesban Juice दैनिक प्रदूषणमा पर्ने राइडरका लागि उपयुक्त छ। यसले मद्दत गर्छ:\n\n✓ घाँटीको जलन कम गर्न\n✓ श्वासप्रश्वास सहज बनाउन\n✓ हल्का antimicrobial समर्थन\n\nके तपाईं चाहनुहुन्छ:\n1. थप जान्न\n2. विशेषज्ञसँग कुरा गर्न\n3. ताजा मूल्य";
          }
        } else {
          setConversationState({ context: null, step: 0 });
          if (language === 'en') {
            return "For general respiratory issues, I recommend Sesbania sesban Powder. It's gentle, portable, and supports throat comfort.\n\nWould you like more details?";
          } else {
            return "सामान्य श्वासप्रश्वास समस्याको लागि, म Sesbania sesban Powder सिफारिस गर्छु। यो हल्का, बोक्न सजिलो, र घाँटीको आरामका लागि उपयुक्त छ।\n\nके तपाईं थप विवरण चाहनुहुन्छ?";
          }
        }
      }

      if (conversationState.context === 'digestive_timing') {
        setConversationState({ context: null, step: 0 });
        if (language === 'en') {
          return "For digestive discomfort, I recommend Sesbania sesban Powder. It is mild and suitable for daily support.\n\nHow to use: Mix 1 teaspoon with warm water or milk once daily.\n\nWould you like more details or to talk to an expert?";
        } else {
          return "पाचन असजिलो भएको अवस्थामा, म Sesbania sesban Powder सिफारिस गर्छु। यो हल्का छ र दैनिक समर्थनका लागि उपयुक्त छ।\n\nप्रयोग विधि: १ चम्चा तातो पानी वा दुधमा मिसाएर दिनमा एक पटक।\n\nके तपाईं थप विवरण वा विशेषज्ञसँग कुरा गर्न चाहनुहुन्छ?";
        }
      }
    }

    // Initial query detection - set context for multi-turn
    if (
      input.includes('cough') ||
      input.includes('khoki') ||
      input.includes('breathing') ||
      input.includes('सास') ||
      input.includes('खोकी') ||
      input.includes('respiratory') ||
      input.match(/श्वास/)
    ) {
      setConversationState({ context: 'respiratory_type', step: 1 });
      if (language === 'en') {
        return "I understand you're having respiratory issues. Is it a dry cough or wet cough?";
      } else {
        return "मैले बुझें, तपाईंलाई श्वासप्रश्वास सम्बन्धी समस्या छ। यो सुक्खा खोकी हो कि चिल्लो खोकी?";
      }
    }

    // Digestion issues
    if (
      input.includes('digestion') ||
      input.includes('stomach') ||
      input.includes('pet') ||
      input.includes('acidity') ||
      input.includes('पेट') ||
      input.includes('पाचन') ||
      input.includes('एसिडिटी')
    ) {
      setConversationState({ context: 'digestive_timing', step: 1 });
      if (language === 'en') {
        return "I can help with digestive issues. When do you usually experience this?\n1. After eating\n2. In the morning\n3. All day";
      } else {
        return "म पाचन समस्यामा मद्दत गर्न सक्छु। तपाईंलाई यो सामान्यतया कहिले हुन्छ?\n1. खाना खाएपछि\n2. बिहान\n3. दिनभर";
      }
    }

    // Price inquiry
    if (input.includes('price') || input.includes('cost') || input.includes('kati') || input.includes('मूल्य') || input.includes('कति')) {
      if (language === 'en') {
        return "Here are our current products:\n\n• Sesbania sesban Juice — NPR 650\n• Sesbania sesban Powder — NPR 650\n\nWould you like to place an order or learn more?";
      } else {
        return "हामीसँग अहिले यी उत्पादनहरू छन्:\n\n• Sesbania sesban Juice — NPR 650\n• Sesbania sesban Powder — NPR 650\n\nके तपाईं अर्डर गर्न चाहनुहुन्छ वा थप जान्न चाहनुहुन्छ?";
      }
    }

    // How to use / dosage
    if (input.includes('how to use') || input.includes('dosage') || input.includes('कसरी प्रयोग') || input.includes('मात्रा')) {
      if (language === 'en') {
        return "Each product comes with detailed instructions:\n\n• Powder: Mix 1 teaspoon (3–5 g) with warm water or milk, once daily\n• Juice: Consume 20–30 ml once daily (best after riding or in the evening)\n\nWhich product are you interested in?";
      } else {
        return "प्रत्येक उत्पादन विस्तृत निर्देशनहरू संग आउँछ:\n\n• पाउडर: १ चम्चा (३–५ ग्राम) तातो पानी वा दुधमा मिसाउनुहोस्, दिनमा एक पटक\n• जुस: २०–३० मिली दिनमा एक पटक (राइड पछि वा बेलुकी)\n\nतपाईं कुन उत्पादनमा रुचि राख्नुहुन्छ?";
      }
    }

    // Safety / certification
    if (input.includes('safe') || input.includes('certified') || input.includes('test') || input.includes('सुरक्षित') || input.includes('प्रमाणित')) {
      if (language === 'en') {
        return "Great question! All our products are:\n✓ Lab-tested for heavy metals (Lead, Mercury, Arsenic, Cadmium)\n✓ Nepcert certified processing\n✓ QR code verification on each package\n✓ Tested for microbial contamination and pesticides\n\nYou can scan the QR code on your product to see your batch's specific test results!";
      } else {
        return "राम्रो प्रश्न! हाम्रा सबै उत्पादनहरू:\n✓ भारी धातुहरूको लागि प्रयोगशाला परीक्षण\n✓ Nepcert प्रमाणित प्रशोधन\n✓ प्रत्येक प्याकेजमा QR कोड प्रमाणीकरण\n✓ सूक्ष्मजीव र कीटनाशक परीक्षण\n\nतपाईंले आफ्नो उत्पादनको QR कोड स्क्यान गरेर आफ्नो ब्याचको परीक्षण परिणाम हेर्न सक्नुहुन्छ!";
      }
    }

    // Delivery / shipping
    if (input.includes('delivery') || input.includes('shipping') || input.includes('डेलिभरी') || input.includes('पठाउने')) {
      if (language === 'en') {
        return "📦 Delivery Info:\n\n• Kathmandu Valley: 1 day\n• Outside Valley: 2-3 days\n• Self Pickup: Free at our Lalitpur hub\n\nYou'll receive an SMS when your order ships!";
      } else {
        return "📦 डेलिभरी जानकारी:\n\n• काठमाडौं उपत्यका: १ दिन\n• उपत्यका बाहिर: २-३ दिन\n• आफैं लिने: ललितपुर हबमा नि:शुल्क\n\nतपाईंको अर्डर पठाइँदा SMS प्राप्त हुनेछ!";
      }
    }

    // Return / refund
    if (input.includes('return') || input.includes('refund') || input.includes('फिर्ता')) {
      if (language === 'en') {
        return "We offer 7-day easy returns if:\n• Product is unused and sealed\n• Original packaging intact\n\nFull refund or replacement available. Contact us via WhatsApp (+977 981-2345678) to initiate a return.";
      } else {
        return "हामी 7-दिनको सजिलो फिर्ता प्रस्ताव गर्छौं यदि:\n• उत्पादन प्रयोग नगरिएको र बन्द छ\n• मूल प्याकेजिङ्ग सुरक्षित छ\n\nपूर्ण रिफन्ड वा प्रतिस्थापन उपलब्ध। फिर्ता सुरु गर्न WhatsApp (+977 981-2345678) मार्फत सम्पर्क गर्नुहोस्।";
      }
    }

    // Doctor / expert
    if (input.includes('doctor') || input.includes('expert') || input.includes('विशेषज्ञ') || input.includes('डाक्टर')) {
      if (language === 'en') {
        return "Would you like to consult with our certified Ayurvedic doctor?\n\nYou can book a FREE 15-minute consultation:\n📱 WhatsApp: +977 981-2345678\n📞 Call: +977 981-2345678\n\nAvailable: 10 AM - 6 PM (Sunday-Friday)";
      } else {
        return "के तपाईं हाम्रो प्रमाणित आयुर्वेदिक डाक्टरसँग परामर्श गर्न चाहनुहुन्छ?\n\nतपाईं नि:शुल्क 15-मिनेट परामर्श बुक गर्न सक्नुहुन्छ:\n📱 WhatsApp: +977 981-2345678\n📞 फोन: +977 981-2345678\n\nउपलब्ध: बिहान 10 बजेदेखि साँझ 6 बजेसम्म (आइतबार-शुक्रबार)";
      }
    }

    // Greetings
    if (input.match(/^(hi|hello|hey|namaste|नमस्ते|नमस्कार)$/)) {
      if (language === 'en') {
        return "Namaste! How can I assist you today? You can ask me about:\n🌿 Product recommendations\n💊 Dosage guidance\n🚚 Delivery info\n✓ Certifications\n\nOr simply tell me your health concern!";
      } else {
        return "नमस्ते! आज म तपाईंलाई कसरी मद्दत गर्न सक्छु? तपाईं मलाई यी बारेमा सोध्न सक्नुहुन्छ:\n🌿 उत्पादन सिफारिस\n💊 मात्रा मार्गदर्शन\n🚚 डेलिभरी जानकारी\n✓ प्रमाणपत्रहरू\n\nवा केवल आफ्नो स्वास्थ्य समस्या भन्नुहोस्!";
      }
    }

    // Quick reply handlers
    if (input === 'respiratory') {
      return getBotResponse('respiratory issues');
    }
    if (input === 'digestive') {
      return getBotResponse('digestive problems');
    }
    if (input === 'wellness') {
      if (language === 'en') {
        return "Great! For daily wellness, I recommend:\n\n• Sesbania sesban Powder: gentle, portable, and easy to mix\n\nWould you like to learn more or get the latest price?";
      } else {
        return "राम्रो! दैनिक स्वास्थ्यको लागि, म सिफारिस गर्छु:\n\n• Sesbania sesban Powder: हल्का, सजिलो, र मिसाउन सजिलो\n\nके तपाईं थप जान्न वा ताजा मूल्य चाहनुहुन्छ?";
      }
    }
    if (input === 'products') {
      if (language === 'en') {
        return "Here are our current products:\n\n1. Sesbania sesban Juice — NPR 650\n2. Sesbania sesban Powder — NPR 650\n\nWhich one would you like to learn more about?";
      } else {
        return "हाम्रा उत्पादनहरू:\n\n1. Sesbania sesban Juice — NPR 650\n2. Sesbania sesban Powder — NPR 650\n\nतपाईं कुनबारे थप जान्न चाहनुहुन्छ?";
      }
    }
    if (input === 'expert') {
      return getBotResponse('expert consultation');
    }

    // Default fallback
    if (language === 'en') {
      return "I'm here to help! You can ask me:\n• About respiratory or digestive health products\n• Dosage and usage instructions\n• Delivery and payment options\n• Our lab certifications\n\nOr type your specific health concern!\n\nNeed to talk to a human expert? Just say 'talk to expert'";
    } else {
      return "म यहाँ मद्दत गर्न छु! तपाईं मलाई सोध्न सक्नुहुन्छ:\n• श्वासप्रश्वास वा पाचन स्वास्थ्य उत्पादनहरू\n• मात्रा र प्रयोग निर्देशन\n• डेलिभरी र भुक्तानी विकल्पहरू\n• हाम्रो प्रयोगशाला प्रमाणपत्रहरू\n\nवा आफ्नो विशेष स्वास्थ्य समस्या टाइप गर्नुहोस्!\n\nमानव विशेषज्ञसँग कुरा गर्न चाहनुहुन्छ? केवल 'विशेषज्ञसँग कुरा गर्नुहोस्' भन्नुहोस्";
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const normalized = inputValue.toLowerCase();
    if (normalized.includes('order') && normalized.includes('juice')) {
      addBotMessage('Taking you to checkout...');
      placeOrder('sesbania-sesban-juice', 'Sesbania sesban Juice', 'Medicinal Juice');
      setInputValue('');
      return;
    }
    if (normalized.includes('order') && normalized.includes('powder')) {
      addBotMessage('Taking you to checkout...');
      placeOrder('sesbania-sesban-powder', 'Sesbania sesban Powder', 'Herbal Throat Powder');
      setInputValue('');
      return;
    }
    const response = getBotResponse(inputValue);
    addBotMessage(response);
    setInputValue('');
  };

  const handleQuickReply = (value: string) => {
    if (value === 'order-juice') {
      addMessage('Order Juice', 'user');
      addBotMessage('Taking you to checkout...');
      placeOrder('sesbania-sesban-juice', 'Sesbania sesban Juice', 'Medicinal Juice');
      return;
    }
    if (value === 'order-powder') {
      addMessage('Order Powder', 'user');
      addBotMessage('Taking you to checkout...');
      placeOrder('sesbania-sesban-powder', 'Sesbania sesban Powder', 'Herbal Throat Powder');
      return;
    }
    const label = quickReplies.find((r) => r.value === value)?.label || value;
    addMessage(label, 'user');
    const response = getBotResponse(value);
    addBotMessage(response);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'np' : 'en'));
    setMessages([]);
    setConversationState({ context: null, step: 0 });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary-teal hover:bg-primary-teal/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[350px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10 text-stone p-4 flex items-center justify-between border-b border-gray-200/70">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="PraanCare"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <div>
                <h3 className="font-semibold text-lg">PraanCare AI Assistant</h3>
                <p className="text-xs text-gray-600">Online • Typically replies instantly</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="text-xs bg-white/70 hover:bg-white px-2 py-1 rounded transition-colors"
              >
                {language === 'en' ? 'EN' : 'NP'}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setConversationState({ context: null, step: 0 });
                }}
                className="hover:bg-white/70 p-1 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary-teal text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies (only show after welcome message) */}
            {messages.length === 1 && !conversationState.context && (
              <div className="flex flex-wrap gap-2 mt-4">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.value}
                    onClick={() => handleQuickReply(reply.value)}
                    className="text-xs bg-white hover:bg-primary-teal hover:text-white text-primary-teal border border-primary-teal px-3 py-2 rounded-full transition-colors"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-4 bg-white">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder={language === 'en' ? 'Type your message...' : 'आफ्नो सन्देश टाइप गर्नुहोस्...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-primary-teal hover:bg-primary-teal/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
