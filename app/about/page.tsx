import LifeEvents from "@/components/LifeEvents";
import ProfileDescription from "@/components/ProfileDescription";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function Home() {
  return (
    <main>
      <div className="flex ml-20 mt-20">
        <div>
          <ProfilePhoto src="/becca.jpg" alt="Profile Image"></ProfilePhoto>
          <LifeEvents
            events={[
              { year: 2010, description: "Graduated from university" },
              { year: 2012, description: "Got my first job at TechCorp" },
              { year: 2015, description: "Promoted to Senior Developer" },
              {
                year: 2018,
                description: "Moved to another country and joined NewTech",
              },
              {
                year: 2020,
                description: "Started working remotely due to pandemic",
              },
              { year: 2023, description: "Started a new project in AI" },
            ]}
          />
        </div>
        <div>
          <ProfileDescription
            name="Your Name"
            bio="A brief biography goes here."
            linkedinUrl="https://www.linkedin.com/in/john-park-11689b16b/"
            githubUrl="https://github.com/johnpark97"
          />
        </div>
      </div>
    </main>
  );
}
