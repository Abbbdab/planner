import Section from "../components/home/Section";

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
      <Section heading="Past due date" cards={late} />
      <Section heading="Due soon" cards={late} />
      <Section heading="Upcoming assignments" cards={late} />
      <Section heading="Graded" cards={late} />
    </div>
  )
}
