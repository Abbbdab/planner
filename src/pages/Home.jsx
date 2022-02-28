import Section from "../components/home/Section";
import SectionCard from "../components/home/SectionCard";

const late = [
  {
    day : 'Monday',
    date : '25',
    subject : 'Math',
    assignment : 'Assignment 1',
    type : 'Homework'

  },
  {
    day : 'Tuesday',
    date : '29',
    subject : 'English',
    assignment : 'Assignment 6',
    type : 'Homework'

  },
  {
    day : 'Wednesday',
    date : '30',
    subject : 'Math',
    assignment : 'Assignment 2',
    type : 'Homework'
  }
]

export default function Home() {
  return (
    <div className="home" >
      <section>
        <h1>Past due date</h1>
        <SectionCard />
      </section>
      <section>
        <h1>Due soon</h1>
          <SectionCard />
          <SectionCard />
      </section>
      <section>
        <h1>Upcoming assignments</h1>
          <SectionCard />
      </section>
      <section>
        <h1>Graded</h1>
          <SectionCard />
          <SectionCard />
      </section>
      {/* <Section heading="Past due date" cards={late} />
      <Section heading="Due soon" cards={late} />
      <Section heading="Upcoming assignments" cards={late} />
      <Section heading="Graded" cards={late} /> */}
    </div>
  )
}
