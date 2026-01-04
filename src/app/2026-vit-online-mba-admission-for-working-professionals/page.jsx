import UniversityHeader from "../../components/UniversityPages/UniversityHeader/UniversityHeader";
import VitAbout from "../../components/UniversityPages/VITPage/VitAbout";
import VitHighlights from "../../components/UniversityPages/VITPage/VitHighlights";
import VitKey from "../../components/UniversityPages/VITPage/VitKey";
import VitProgramme from "../../components/UniversityPages/VITPage/VitProgramme";
import VitCurriculum from "../../components/UniversityPages/VITPage/VitCurriculum";
import VitAlumin from "../../components/UniversityPages/VITPage/VitAlumin";
import VitSupport from "../../components/UniversityPages/VITPage/VitSupport";
import VitContact from "../../components/UniversityPages/VITPage/VitContact";
import VitContent from "../../components/UniversityPages/VITPage/VitContent";
import VitFaq from "../../components/UniversityPages/VITPage/VitFaq";
import Script from "next/script";

export default function VitPage() {
  return (
    <>
      <Script
        id="2026-vit-online-mba-admission-for-working-professionals"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the 2026 VIT Online MBA Admission for Working Professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 2026 VIT Online MBA Admission for Working Professionals is a flexible, fully online management program offered by Vellore Institute of Technology. It is designed to help professionals enhance managerial and leadership skills without quitting their jobs through online classes, recorded lectures, and continuous assessments.",
                },
              },
              {
                "@type": "Question",
                name: "Is the VIT Online MBA suitable for full-time working professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the VIT Online MBA is specifically designed for full-time working professionals. It offers flexible learning through recorded sessions and scheduled live classes, allowing learners to balance work, study, and personal responsibilities.",
                },
              },
              {
                "@type": "Question",
                name: "Who is eligible to apply for the VIT Online MBA Admission 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Graduates from a recognized university are eligible to apply for the Online MBA Admission for 2026. While work experience is not mandatory, working professionals gain greater value from the application-oriented curriculum.",
                },
              },
              {
                "@type": "Question",
                name: "Is the VIT Online MBA degree recognized and valid for jobs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the VIT Online MBA degree is recognized by employers and holds the same academic credibility as traditional programs. It is valid for promotions, career advancement, and managerial roles.",
                },
              },
              {
                "@type": "Question",
                name: "How flexible is the learning schedule for working professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The learning schedule is highly flexible. Students can access recorded lectures anytime, attend live sessions as per availability, and complete assignments within set deadlines, making it ideal for busy professionals.",
                },
              },
              {
                "@type": "Question",
                name: "What specializations are available in the VIT Online MBA program?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The VIT Online MBA offers industry-relevant specializations such as Marketing, Finance, Human Resource Management, Operations, Business Analytics, and other emerging management fields.",
                },
              },
              {
                "@type": "Question",
                name: "What is the duration of the VIT Online MBA program?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The VIT Online MBA program has a duration of two years, divided into semesters, allowing working professionals to manage studies alongside their careers.",
                },
              },
              {
                "@type": "Question",
                name: "How does the admission process work for the 2026 intake?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Tamilnadu VIT Online MBA Admission process is completely online. Candidates submit the application form, upload documents, and complete admission formalities digitally.",
                },
              },
              {
                "@type": "Question",
                name: "Can the VIT Online MBA help in career growth and salary improvement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the program helps professionals transition into managerial roles, gain leadership responsibilities, and improve career prospects by strengthening strategic, analytical, and decision-making skills.",
                },
              },
              {
                "@type": "Question",
                name: "Can professionals from outside Tamil Nadu apply for the VIT Online MBA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, professionals from across India can apply. Although popular in Chennai and Vellore, the online format allows learners from any location to enroll without geographical limitations.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <UniversityHeader />
        <VitAbout />
        <VitProgramme />
        <VitKey />
        <VitHighlights />
        <VitCurriculum />
        <VitAlumin />
        <VitSupport />
        <VitContact />
        <VitFaq />
        <VitContent />
      </div>
    </>
  );
}
