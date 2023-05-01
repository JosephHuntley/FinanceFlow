import { Component, createSignal } from "solid-js";
import Button from "../global/Button";
import MailIcon from "/mail.png";

const Form: Component<{}> = (props) => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [company, setCompany] = createSignal("");
  const [subject, setSubject] = createSignal("");
  const [message, setMessage] = createSignal("");

  return (
    <section class="flex flex-col gap-12">
      <h1 class="font-bold text-4xl sm:text-6xl">Get in touch</h1>
      <div class="flex flex-col sm:flex-row">
        <form class="sm:mt-10 sm:mt-0 gap-8 flex flex-col">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col ">
              <label class="uppercase font-bold" for="name">
                Name
              </label>
              <input
                class="bg-dark-blue rounded-[100px] mt-3 px-6 py-5"
                placeholder="Full Name"
                value={name()}
                onChange={(e) => setName(e.target.value)}
                title="name"
                type="text"
              />
            </div>
            <div class="flex flex-col ">
              <label class="uppercase font-bold" for="email">
                Email
              </label>
              <input
                class="bg-dark-blue rounded-[100px] mt-3 px-6 py-5"
                placeholder="email@example.com"
                value={email()}
                onChange={(e) => setEmail(e.target.value)}
                title="email"
                type="text"
              />
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col ">
              <label class="uppercase font-bold" for="company">
                Company
              </label>
              <input
                class="bg-dark-blue rounded-[100px] mt-3 px-6 py-5"
                placeholder="Company Name"
                value={company()}
                onChange={(e) => setCompany(e.target.value)}
                title="company"
                type="text"
              />
            </div>
            <div class="flex flex-col ">
              <label class="uppercase font-bold" for="subject">
                Subject
              </label>
              <input
                class="bg-dark-blue rounded-[100px] mt-3 px-6 py-5"
                placeholder="How Can We Help?"
                value={subject()}
                onChange={(e) => setSubject(e.target.value)}
                title="subject"
                type="text"
              />
            </div>
          </div>
          <div class="flex flex-col ">
            <label class="uppercase font-bold" for="message">
              Message
            </label>
            <textarea
              class="bg-dark-blue rounded-[14px] mt-3 px-6 py-5 h-[160px]"
              placeholder="Your Message"
              value={message()}
              onChange={(e) => setMessage(e.target.value)}
              title="message"
            />
          </div>
          <Button>Send Message</Button>
        </form>
        <div></div>
      </div>
      <div>
        <p class="font-bold text-xl">Want to reach us directly?</p>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
          pharetra elementum sit id sagittis non donec egestas.
        </p>
        <ul class="flex flex-col gap-6 mt-8">
          <li class="flex items-center ">
            <img class="mr-5" src={MailIcon} /> Contact@ example.com
          </li>
          <li class="flex items-center ">
            <img class="mr-5" src={MailIcon} /> Support@ example.com
          </li>
          <li class="flex items-center ">
            <img class="mr-5" src={MailIcon} /> Press@ example.com
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Form;
