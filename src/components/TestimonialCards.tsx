'use client'
//Infinite Moving Cards
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const TestimonialCards = () => {
    const datalist = [
        {
            quote: "As a  violinist, finding the right mentor can be challenging, but this school matched me with a teacher who is truely understands my goals and challenges.",
            name: "Emma Stone",
            title: "Violin Student"
        },
        {
          quote: "As a cellist, I was struggling to refine my technique, but the personalized approach of this school helped me unlock new skills I never thought possible.",
          name: 'Michael Harper',
          title: 'Cello Student',
        },
        {
          quote: "Learning piano here has been transformative. My teacher’s dedication and understanding of my unique style have made all the difference in my progress",
          name: 'Sophia Bennett',
          title: 'Piano Student',
        },
        {
          quote: "I had always struggled with confidence as a vocalist, but my mentor here has shown me how to believe in my voice and embrace my strengths.",
          name: 'Liam Carter',
          title: 'Vocal Student',
        },
        {
          quote: "As a budding composer, having a mentor who nurtures creativity while teaching discipline has been the highlight of my journey here.",
          name: 'Olivia Ramirez',
          title: ' Composition Student',
        },
        {
          quote: "Finding a place where I could blend my passion for jazz saxophone with rigorous training seemed impossible until I joined this school.",
          name: 'Ethan Ross',
          title: 'Jazz Saxophone Student',
        },
        {
          quote: "Before coming here, I felt stuck with my guitar skills. The support and feedback from my teacher have helped me rediscover my love for playing.",
          name: 'Chloe Simmons',
          title: 'Guitar Student',
        },
        {
          quote: "My dream of mastering the drums felt distant, but the guidance and encouragement I’ve received here have turned that dream into reality.",
          name: 'Noah Mitchell',
          title: 'Drums Student',
        },
      ]
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony and Voices of achievements</h2>
        <div>
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={datalist}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards
