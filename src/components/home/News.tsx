import { Component } from "solid-js";
import { articles } from "~/data/Constants";
import Button from "../global/Button";

const News: Component<{}> = (props) => {
  return (
    <section class="mt-28 flex flex-col items-center">
      <div class="flex flex-col sm:flex-row justify-between w-full">
        <h2 class="text-3xl font-bold">Browse our latest news</h2>
        <p class="mt-4 sm:mt-0 max-w-[460px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </p>
      </div>
      <div class="gap-4 flex flex-col sm:flex-row mt-6">
        {articles.map((article) => (
          <div class="bg-dark-blue w-full  rounded-[40px] ">
            <img class="w-full rounded-t-[40px]" src={article.heroImg} />
            <div class="px-6 pb-9">
              <div class="bg-blue w-min py-2 px-4 rounded-full mt-[-20px] relative font-medium text-sm">
                Products
              </div>
              <h3 class="mt-5 font-bold text-xl">{article.title}</h3>
              <p class="mt-4">{article.text}</p>
              <div class="mt-8 border-white/10 border-b w-full" />
              <div class="mt-8 flex flex-row gap-4 items-center">
                <img src={article.authorImg} />
                <div>
                  <h4>{article.author}</h4>
                  <p>{article.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-4" variant="alt">
        View All Articles
      </Button>
    </section>
  );
};

export default News;
