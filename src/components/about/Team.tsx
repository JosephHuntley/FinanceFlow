import { Component } from "solid-js";
import { team } from "~/data/Constants";

const Team: Component<{}> = (props) => {
  return (
    <section class="mt-10 sm:mt-44">
      <div>
        <h2 class="text-2xl sm:text-4xl font-bold ">Our Team</h2>
        <p class="mt-4 max-w-[328px] sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
          lorem purus justo, ultricies.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mt-6">
        {team.map((member) => (
          <div class="bg-dark-blue rounded-[40px] py-6 px-4 flex flex-col">
            <img class="w-full justify-self-center" src={member.pic} />
            <h3 class="font-bold uppercase mt-8">{member.name}</h3>
            <p class="uppercase mt-3">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
