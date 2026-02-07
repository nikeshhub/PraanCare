'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { addToCart } from '@/lib/cart';

type QuizData = {
  ageGroup: string;
  occupation: string;
  location: string;
  primaryConcerns: string[];
  respiratorySymptoms?: string[];
  pollutionExposure?: string;
  symptomDuration?: string;
  digestiveIssue?: string;
  digestiveTiming?: string;
  commute: string;
  physicalActivity: string;
  stressLevel: string;
  format: string;
  budget: string;
};

type ProductRecommendation = {
  slug: string;
  name: string;
  form: string;
  priceLabel: string;
  description: string;
  why: string;
  dosage: string;
};

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    ageGroup: '',
    occupation: '',
    location: '',
    primaryConcerns: [],
    commute: '',
    physicalActivity: '',
    stressLevel: '',
    format: '',
    budget: '',
  });
  const [recommendation, setRecommendation] = useState<ProductRecommendation | null>(null);

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;

  const formatLabel = (value: string) =>
    value
      ? value
          .replace(/([A-Z])/g, ' $1')
          .replace(/[_-]/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase())
      : '—';

  const getRecommendation = (): ProductRecommendation => {
    const { primaryConcerns, occupation, pollutionExposure, respiratorySymptoms } = quizData;

    // Respiratory focus
    if (primaryConcerns.includes('respiratory')) {
      if ((occupation === 'delivery' || occupation === 'outdoor') && pollutionExposure === 'daily') {
        return {
          slug: 'sesbania-sesban-juice',
          name: 'Sesbania sesban Juice',
          form: 'Medicinal Juice',
          priceLabel: 'NPR 500',
          description: 'Gentle herbal throat-soothing juice for daily riders and pollution exposure',
          why: 'Your answers show frequent exposure to dust and pollution. This juice supports respiratory comfort and helps reduce throat irritation.',
          dosage: '20–30 ml once daily, best after riding or in the evening'
        };
      }

      return {
        slug: 'sesbania-sesban-powder',
        name: 'Sesbania sesban Powder',
        form: 'Herbal Throat Powder',
        priceLabel: 'NPR 500',
        description: 'Portable throat powder for ongoing respiratory comfort',
        why: 'This powder offers steady throat support and is easy to mix with warm water or milk for daily use.',
        dosage: '1 teaspoon (≈3–5 g) in 100–150 ml warm water or milk, once daily'
      };
    }

    // For other concerns, recommend the powder as the daily support option
    return {
      slug: 'sesbania-sesban-powder',
      name: 'Sesbania sesban Powder',
      form: 'Herbal Throat Powder',
      priceLabel: 'NPR 500',
      description: 'Daily throat comfort and herbal support for long exposure periods',
      why: 'This is a gentle, versatile option for daily wellness and throat comfort.',
      dosage: '1 teaspoon (≈3–5 g) in 100–150 ml warm water or milk, once daily'
    };
  };

  const handleNext = () => {
    // Skip conditional steps based on answers
    if (step === 2 && !quizData.primaryConcerns.includes('respiratory') && !quizData.primaryConcerns.includes('digestive')) {
      setStep(4); // Skip symptom details
    } else if (step === 5) {
      // Final step - show recommendation
      const rec = getRecommendation();
      setRecommendation(rec);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return quizData.ageGroup && quizData.occupation && quizData.location;
      case 1:
        return quizData.primaryConcerns.length > 0;
      case 2:
        if (quizData.primaryConcerns.includes('respiratory')) {
          return quizData.pollutionExposure && quizData.symptomDuration;
        }
        if (quizData.primaryConcerns.includes('digestive')) {
          return quizData.digestiveIssue && quizData.digestiveTiming;
        }
        return true;
      case 3:
        return quizData.commute && quizData.physicalActivity && quizData.stressLevel;
      case 4:
        return quizData.format && quizData.budget;
      default:
        return true;
    }
  };

  if (recommendation) {
    return (
      <div className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
                Your Recommendation
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Personalized herbal support based on your answers
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl">
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-3xl mb-2">We Recommend:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-heading font-bold text-primary-teal mb-2">
                    {recommendation.name}
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">{recommendation.description}</p>
                  <p className="text-2xl font-semibold text-stone">{recommendation.priceLabel}</p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary-teal">Why this is perfect for you:</h3>
                  <p className="text-gray-700 leading-relaxed">{recommendation.why}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Recommended Dosage:</h3>
                  <p className="text-gray-700">{recommendation.dosage}</p>
                </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="flex-1 btn-primary h-12 text-lg"
                  onClick={() => {
                    addToCart({
                      slug: recommendation.slug,
                      name: recommendation.name,
                      form: recommendation.form,
                      priceLabel: recommendation.priceLabel,
                    });
                    router.push("/cart");
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    addToCart({
                      slug: recommendation.slug,
                      name: recommendation.name,
                      form: recommendation.form,
                      priceLabel: recommendation.priceLabel,
                    });
                    router.push("/checkout");
                  }}
                >
                  Order Now
                </Button>
                <Link href="/contact" className="flex-1">
                  <Button variant="outline" className="w-full h-12 text-lg border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white">
                    Talk to Expert
                  </Button>
                </Link>
              </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => {
                      setStep(0);
                      setRecommendation(null);
                      setQuizData({
                        ageGroup: '',
                        occupation: '',
                        location: '',
                        primaryConcerns: [],
                        commute: '',
                        physicalActivity: '',
                        stressLevel: '',
                        format: '',
                        budget: '',
                      });
                    }}
                    className="text-primary-teal hover:underline"
                  >
                    Start Over
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Health Assessment Quiz
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Let&apos;s find the right herbal blend for you
            </p>
            <p className="text-gray-600 mt-2">Takes only 2 minutes</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {step + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-teal transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Quiz Card */}
          <Card className="card-elevated">
            <CardContent className="p-8">
            {/* Step 0: Basic Information */}
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">Basic Information</h2>

                <div>
                  <Label className="text-lg mb-3 block">Age Group *</Label>
                  <RadioGroup value={quizData.ageGroup} onValueChange={(val) => setQuizData({ ...quizData, ageGroup: val })}>
                    <div className="space-y-3">
                      {['18-30', '31-45', '46-60', '60+'].map((age) => (
                        <div key={age} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={age} id={`age-${age}`} />
                          <Label htmlFor={`age-${age}`} className="cursor-pointer">{age}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Occupation Type *</Label>
                  <RadioGroup value={quizData.occupation} onValueChange={(val) => setQuizData({ ...quizData, occupation: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'delivery', label: 'Delivery/Transport' },
                        { value: 'office', label: 'Office Work' },
                        { value: 'outdoor', label: 'Outdoor Labor' },
                        { value: 'homemaker', label: 'Homemaker' },
                        { value: 'other', label: 'Other' },
                      ].map((occ) => (
                        <div key={occ.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={occ.value} id={`occ-${occ.value}`} />
                          <Label htmlFor={`occ-${occ.value}`} className="cursor-pointer">{occ.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Location *</Label>
                  <RadioGroup value={quizData.location} onValueChange={(val) => setQuizData({ ...quizData, location: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'ktm', label: 'Kathmandu Valley' },
                        { value: 'pokhara', label: 'Pokhara' },
                        { value: 'urban', label: 'Other Urban' },
                        { value: 'rural', label: 'Rural' },
                      ].map((loc) => (
                        <div key={loc.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={loc.value} id={`loc-${loc.value}`} />
                          <Label htmlFor={`loc-${loc.value}`} className="cursor-pointer">{loc.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 1: Primary Health Concerns */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">What brings you here today?</h2>
                <p className="text-gray-600 mb-4">Select all that apply</p>

                <div className="space-y-4">
                  {[
                    { value: 'respiratory', label: 'Respiratory issues (cough, breathing difficulty)' },
                    { value: 'digestive', label: 'Digestive problems' },
                    { value: 'stress', label: 'Stress/Sleep issues' },
                    { value: 'joint', label: 'Joint/Body pain' },
                    { value: 'wellness', label: 'General wellness/prevention' },
                  ].map((concern) => (
                    <div key={concern.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                      <Checkbox
                        id={`concern-${concern.value}`}
                        checked={quizData.primaryConcerns.includes(concern.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setQuizData({ ...quizData, primaryConcerns: [...quizData.primaryConcerns, concern.value] });
                          } else {
                            setQuizData({ ...quizData, primaryConcerns: quizData.primaryConcerns.filter(c => c !== concern.value) });
                          }
                        }}
                      />
                      <Label htmlFor={`concern-${concern.value}`} className="cursor-pointer flex-1">{concern.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Specific Symptoms (Conditional) */}
            {step === 2 && quizData.primaryConcerns.includes('respiratory') && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">Tell us about your respiratory health</h2>

                <div>
                  <Label className="text-lg mb-3 block">How often are you exposed to pollution/dust? *</Label>
                  <RadioGroup value={quizData.pollutionExposure} onValueChange={(val) => setQuizData({ ...quizData, pollutionExposure: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'daily', label: 'Daily' },
                        { value: 'frequent', label: '3-4 times/week' },
                        { value: 'occasional', label: 'Occasionally' },
                      ].map((exp) => (
                        <div key={exp.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={exp.value} id={`exp-${exp.value}`} />
                          <Label htmlFor={`exp-${exp.value}`} className="cursor-pointer">{exp.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">How long have you had these symptoms? *</Label>
                  <RadioGroup value={quizData.symptomDuration} onValueChange={(val) => setQuizData({ ...quizData, symptomDuration: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'recent', label: '< 1 month' },
                        { value: 'moderate', label: '1-3 months' },
                        { value: 'extended', label: '3-6 months' },
                        { value: 'chronic', label: '> 6 months' },
                      ].map((dur) => (
                        <div key={dur.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={dur.value} id={`dur-${dur.value}`} />
                          <Label htmlFor={`dur-${dur.value}`} className="cursor-pointer">{dur.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 2 && quizData.primaryConcerns.includes('digestive') && !quizData.primaryConcerns.includes('respiratory') && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">Tell us about your digestive health</h2>

                <div>
                  <Label className="text-lg mb-3 block">Main Issue *</Label>
                  <RadioGroup value={quizData.digestiveIssue} onValueChange={(val) => setQuizData({ ...quizData, digestiveIssue: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'acidity', label: 'Acidity' },
                        { value: 'bloating', label: 'Bloating' },
                        { value: 'constipation', label: 'Constipation' },
                        { value: 'appetite', label: 'Loss of appetite' },
                      ].map((issue) => (
                        <div key={issue.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={issue.value} id={`issue-${issue.value}`} />
                          <Label htmlFor={`issue-${issue.value}`} className="cursor-pointer">{issue.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">When do you experience this? *</Label>
                  <RadioGroup value={quizData.digestiveTiming} onValueChange={(val) => setQuizData({ ...quizData, digestiveTiming: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'afterMeals', label: 'After meals' },
                        { value: 'morning', label: 'Morning' },
                        { value: 'evening', label: 'Evening' },
                        { value: 'irregular', label: 'Irregular' },
                      ].map((timing) => (
                        <div key={timing.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={timing.value} id={`timing-${timing.value}`} />
                          <Label htmlFor={`timing-${timing.value}`} className="cursor-pointer">{timing.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 3: Lifestyle Factors */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">Lifestyle Factors</h2>

                <div>
                  <Label className="text-lg mb-3 block">Daily Commute *</Label>
                  <RadioGroup value={quizData.commute} onValueChange={(val) => setQuizData({ ...quizData, commute: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'short', label: '< 30 min' },
                        { value: 'medium', label: '30-60 min' },
                        { value: 'long', label: '1-2 hours' },
                        { value: 'veryLong', label: '> 2 hours' },
                      ].map((com) => (
                        <div key={com.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={com.value} id={`com-${com.value}`} />
                          <Label htmlFor={`com-${com.value}`} className="cursor-pointer">{com.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Physical Activity *</Label>
                  <RadioGroup value={quizData.physicalActivity} onValueChange={(val) => setQuizData({ ...quizData, physicalActivity: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'sedentary', label: 'Sedentary' },
                        { value: 'light', label: 'Light' },
                        { value: 'moderate', label: 'Moderate' },
                        { value: 'active', label: 'Active' },
                      ].map((activity) => (
                        <div key={activity.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={activity.value} id={`activity-${activity.value}`} />
                          <Label htmlFor={`activity-${activity.value}`} className="cursor-pointer">{activity.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Stress Level *</Label>
                  <RadioGroup value={quizData.stressLevel} onValueChange={(val) => setQuizData({ ...quizData, stressLevel: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'low', label: 'Low' },
                        { value: 'moderate', label: 'Moderate' },
                        { value: 'high', label: 'High' },
                      ].map((stress) => (
                        <div key={stress.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={stress.value} id={`stress-${stress.value}`} />
                          <Label htmlFor={`stress-${stress.value}`} className="cursor-pointer">{stress.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 4: Product Preferences */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">Product Preferences</h2>

                <div>
                  <Label className="text-lg mb-3 block">Preferred Format *</Label>
                  <RadioGroup value={quizData.format} onValueChange={(val) => setQuizData({ ...quizData, format: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'powder', label: 'Powder' },
                        { value: 'juice', label: 'Juice' },
                        { value: 'tea', label: 'Tea' },
                        { value: 'tablets', label: 'Tablets' },
                        { value: 'noPreference', label: 'No Preference' },
                      ].map((format) => (
                        <div key={format.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={format.value} id={`format-${format.value}`} />
                          <Label htmlFor={`format-${format.value}`} className="cursor-pointer">{format.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg mb-3 block">Budget Range *</Label>
                  <RadioGroup value={quizData.budget} onValueChange={(val) => setQuizData({ ...quizData, budget: val })}>
                    <div className="space-y-3">
                      {[
                        { value: 'low', label: 'NPR 500-1000' },
                        { value: 'medium', label: 'NPR 1000-1500' },
                        { value: 'high', label: 'NPR 1500+' },
                      ].map((budget) => (
                        <div key={budget.value} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 p-4 hover:border-primary/60 hover:shadow-sm transition-all">
                          <RadioGroupItem value={budget.value} id={`budget-${budget.value}`} />
                          <Label htmlFor={`budget-${budget.value}`} className="cursor-pointer">{budget.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold mb-2">Review Your Answers</h2>
                <p className="text-gray-600">Confirm your details before we generate your recommendation.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Age Group</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.ageGroup)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Occupation</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.occupation)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.location)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Primary Concerns</p>
                    <p className="text-lg font-medium text-stone">
                      {quizData.primaryConcerns.length
                        ? quizData.primaryConcerns.map(formatLabel).join(', ')
                        : '—'}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Commute</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.commute)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Physical Activity</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.physicalActivity)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Stress Level</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.stressLevel)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Preferred Format</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.format)}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Budget Range</p>
                    <p className="text-lg font-medium text-stone">{formatLabel(quizData.budget)}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 0 && (
                <Button variant="outline" onClick={handleBack} className="border-2">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="ml-auto btn-primary"
              >
                {step === 5 ? 'Get Recommendation' : step === 4 ? 'Review Answers' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
  );
}
