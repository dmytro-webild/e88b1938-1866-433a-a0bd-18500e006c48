"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, DollarSign, Eye, Lightbulb, Shield, Zap, Calendar } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumLarge"
      background="grid"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Glodent"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "Why Us", id: "features" },
            { name: "Reviews", id: "testimonials" }
          ]}
          button={{
            text: "Book Appointment",            href: "#contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero" className="min-h-screen">
        <div className="h-full flex items-end">
          <HeroOverlay
            title="Best Dental Clinic in Beeramguda"
            description="Advanced dental care with 4.9★ Google rating. Affordable treatments starting at ₹100 consultation. Same-day implants, laser dentistry, and experienced team of 5 specialists."
            tag="Trusted by 1000+ Patients"
            imageSrc="http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23917.jpg"
            imageAlt="Modern dental clinic interior with advanced equipment"
            showBlur={true}
            showDimOverlay={false}
            buttons={[
              {
                text: "Call Now: 099087 97444",                href: "tel:09908797444"
              },
              {
                text: "Book Appointment",                href: "#contact"
              }
            ]}
          />
        </div>
      </div>

      <div id="trust-bar" data-section="trust-bar" className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6">
          <MetricCardFourteen
            title="Glodent Multi Speciality Dental Care & Implant Centre - Your Trusted Dental Partner"
            tag="Why Choose Us"
            metrics={[
              {
                id: "1",                value: "4.9★",                description: "Google rating with 1000+ verified patient reviews"
              },
              {
                id: "2",                value: "12+",                description: "Years of trusted dental care and expertise"
              },
              {
                id: "3",                value: "5",                description: "Experienced dentists on our specialized team"
              },
              {
                id: "4",                value: "10000+",                description: "Happy patients treated successfully"
              }
            ]}
            metricsAnimation="opacity"
            useInvertedBackground={false}
          />
        </div>
      </div>

      <div id="services" data-section="services" className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 max-w-7xl">
          <FeatureCardNineteen
            title="Our Dental Services"
            description="Comprehensive dental solutions using latest technology and advanced treatments for your complete oral health"
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              {
                id: 1,
                tag: "Advanced",                title: "Dental Implants",                subtitle: "Same-Day Implants Available",                description: "Replace missing teeth with permanent dental implants. Immediate implants for tooth extraction and replacement in one visit. Using latest implant technology with 99% success rate.",                imageSrc: "http://img.b2bpic.net/free-photo/dental-procedure-installing-braces-close-up-dentistry-braces-teeth_169016-67470.jpg",                imageAlt: "dental implant procedure illustration close-up"
              },
              {
                id: 2,
                tag: "Modern",                title: "Invisible Aligners",                subtitle: "Clear Teeth Straightening",                description: "Aesthetic invisible aligner treatment since 2013. Straighten your teeth without visible braces. Comfortable, removable, and perfect for busy professionals.",                imageSrc: "http://img.b2bpic.net/free-photo/selfie-happy-woman_23-2148547556.jpg",                imageAlt: "invisible teeth aligners clear braces"
              },
              {
                id: 3,
                tag: "Specialist",                title: "Root Canal Treatment",                subtitle: "Save Your Natural Teeth",                description: "Expert endodontic treatment with RVG X-ray facility. Painless root canal therapy using modern equipment. Preserve your natural teeth and prevent extraction.",                imageSrc: "http://img.b2bpic.net/free-photo/dentist-checking-patient-mounth-care_23-2149195923.jpg",                imageAlt: "root canal treatment dental procedure"
              },
              {
                id: 4,
                tag: "Laser",                title: "Laser Dentistry",                subtitle: "Precision Care",                description: "Advanced laser technology for painless and precise treatments. Reduced bleeding, faster healing, and minimal discomfort. Perfect for gum disease and oral surgery.",                imageSrc: "http://img.b2bpic.net/free-photo/dentist-with-face-shield-reviewing-panoramic-mouth-x-ray-image-patient-global-pandemic-assistant-doctor-talking-with-senior-woman-wearing-suit-coverall-protection-suit-mask-gloves_482257-3235.jpg",                imageAlt: "laser dentistry treatment technology modern"
              },
              {
                id: 5,
                tag: "Hygiene",                title: "Professional Cleaning",                subtitle: "Maintain Oral Health",                description: "Deep cleaning and plaque removal by expert hygienists. Prevent cavities and gum disease. Regular maintenance for optimal dental health.",                imageSrc: "http://img.b2bpic.net/free-photo/dentist-work-young-woman-dentist-treating-kid-tooth-dentistry-concept_169016-67119.jpg",                imageAlt: "professional teeth cleaning dental hygiene"
              },
              {
                id: 6,
                tag: "Cosmetic",                title: "Teeth Whitening",                subtitle: "Bright Confident Smile",                description: "Professional teeth whitening for a brighter smile. Safe and effective whitening with lasting results. Improve your confidence with a radiant smile.",                imageSrc: "http://img.b2bpic.net/free-photo/woman-patient-visiting-dentist_1303-24397.jpg",                imageAlt: "professional teeth whitening bright smile"
              }
            ]}
          />
        </div>
      </div>

      <div id="features" data-section="features" className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 max-w-6xl">
          <SplitAbout
            title="Why Choose Glodent?"
            description="Experience exceptional dental care from Hyderabad's most trusted multi-specialty dental clinic. Our commitment to excellence and patient satisfaction has made us the choice of over 1000 happy families."
            textboxLayout="default"
            useInvertedBackground={false}
            bulletPoints={[
              {
                title: "Same Day Dental Implants",                description: "Immediate tooth replacement without waiting period. Advanced implant technology with proven success rates.",                icon: Zap
              },
              {
                title: "Affordable Treatment Plans",                description: "Consultation from just ₹100. Transparent pricing with flexible payment options. Quality care accessible to all.",                icon: DollarSign
              },
              {
                title: "Latest Laser Dentistry",                description: "Painless treatments with precision laser technology. Faster healing and minimal discomfort for all procedures.",                icon: Lightbulb
              },
              {
                title: "RVG X-Ray Facility",                description: "Advanced digital imaging for accurate diagnostics. Reduced radiation exposure with superior image quality.",                icon: Eye
              },
              {
                title: "Experienced Dental Team",                description: "5 specialized dentists with years of expertise. Continuous training in latest dental techniques and technology.",                icon: Award
              },
              {
                title: "DMHO & TSPCB Certified",                description: "Hospital-grade hygiene standards. Certified by regulatory bodies for quality and safety assurance.",                icon: Shield
              }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/professional-dentist-team-checking-patient-danture-analyzing-teeth-infection-discussing-oral-hygiene-dental-consultation-stomatological-office-concept-stomatology-medicine_482257-39551.jpg"
            imagePosition="right"
            mediaAnimation="opacity"
            buttons={[
              {
                text: "WhatsApp Us",                href: "https://wa.me/919908797444"
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6 max-w-7xl">
          <TestimonialCardSixteen
            title="What Our Patients Say"
            description="Join thousands of satisfied patients who have experienced exceptional dental care at Glodent. Read real testimonials from our valued community."
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="slide-up"
            testimonials={[
              {
                id: "1",                name: "Priya Sharma",                role: "Patient",                company: "Hyderabad",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-doctor-home-visit_637285-11276.jpg",                imageAlt: "happy patient smiling after dental treatment"
              },
              {
                id: "2",                name: "Rajesh Kumar",                role: "Patient",                company: "Beeramguda",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/client-equipment-clinic-patient-women_1303-487.jpg",                imageAlt: "male patient satisfied after treatment smile"
              },
              {
                id: "3",                name: "Meera Patel",                role: "Patient",                company: "Hyderabad",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/view-student-cute-woman-smiling-camera_197531-33567.jpg",                imageAlt: "woman smiling professional portrait testimonial"
              },
              {
                id: "4",                name: "Arjun Singh",                role: "Patient",                company: "Madhura Nagar",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg",                imageAlt: "man professional smiling portrait testimonial"
              },
              {
                id: "5",                name: "Divya Iyer",                role: "Patient",                company: "Hyderabad",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/man-winking-thumb-up_1187-3210.jpg",                imageAlt: "woman happy smiling testimonial portrait"
              },
              {
                id: "6",                name: "Vikram Reddy",                role: "Patient",                company: "Teja Residency",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",                imageAlt: "man happy smiling professional portrait"
              }
            ]}
            kpiItems={[
              {
                value: "1000+",                label: "Happy Patients"
              },
              {
                value: "4.9★",                label: "Google Rating"
              },
              {
                value: "98%",                label: "Satisfaction Rate"
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="py-12 md:py-20">
        <div className="mx-auto px-4 md:px-6 max-w-3xl">
          <ContactCenter
            tag="Get Started"
            title="Book Your Dental Appointment Today"
            description="Schedule your consultation with our dental experts. Walk-ins welcome! No appointment required. Available Monday-Saturday 9:30 AM - 9:00 PM, Sunday 9:00 AM - 9:00 PM."
            tagIcon={Calendar}
            background={{
              variant: "rotated-rays-animated-grid"
            }}
            useInvertedBackground={false}
            inputPlaceholder="Your phone number"
            buttonText="Schedule Now"
            termsText="We'll contact you within 2 hours to confirm your appointment. Call us directly at 099087 97444 for immediate booking."
          />
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Glodent"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Terms of Service",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}