"use client";
import * as React from "react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { Section, sectionBlockSchemaField } from "../layout/section";

interface CustomHeroData {
  [key: string]: any;
  background?: string;
  signature?: string;
  mainText?: string;
  quote?: string;
  poem?: string;
}

export const CustomHero = ({ data }: { data: CustomHeroData }) => {
  return (
    <Section background="bg-teal-700" className="min-h-screen text-white pt-32">
      {/* Main Content Grid */}

      {/* Signature */}
      {data.signature && (
        <div
          data-tina-field={tinaField(data as any, "signature")}
          className="text-6xl font-light mb-8 px-8"
        >
          {data.signature}
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-8">
        {/* Left Column - Main Content */}

        <div className="space-y-8 relative">

          {/* Main Text with markdown-like styling */}
          {data.mainText && (
            <div
              data-tina-field={tinaField(data as any, "mainText")}
              className="space-y-6 text-lg leading-relaxed relative z-10"
            >
              {data.mainText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-white w-full">
                  {paragraph
                    .split("**")
                    .map((part, partIndex) =>
                      partIndex % 2 === 1 ? (
                        <strong key={partIndex}>{part}</strong>
                      ) : (
                        part
                          .split("*")
                          .map((italicPart, italicIndex) =>
                            italicIndex % 2 === 1 ? (
                              <em className="text-right w-full" key={italicIndex}>{italicPart}</em>
                            ) : (
                              italicPart
                            )
                          )
                      )
                    )}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Poem */}
        <div className="lg:pl-8 place-self-end">
          {data.poem && (
            <div
              data-tina-field={tinaField(data as any, "poem")}
              className="font-serif text-lg leading-relaxed italic"
            >
              {data.poem.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export const customHeroBlockSchema: Template = {
  name: "customHero",
  label: "Custom Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      signature: "JH",
      mainText:
        "i'm jh, when i was a kid and asking my mom what i should do she used to answer:\n\nand that's what i'm doing with this blog (and life in general)\n\nso here you'll find me trying to experience life trough writing, poetry, photography, essays.\n\nthis intangible space is one of my verses. might not be the best or even a good one. but it has the merit of not fighting for greatness and of existing.",
      quote: "make your own experience",
      poem: '"We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. sustain life. Poetry, beauty, romance, love, these are what we stay alive for. To quote from Whitman, "O me! O life!... of the questions of these recurring; of the endless trains of the faithless... of cities filled with the foolish; what good amid these, O me, O life?" Answer. That you are here - that life exists, and identity; that the powerful play goes on and you may contribute a verse. That the powerful play goes on and you may contribute a verse. What will your verse be?"',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: "string",
      label: "Signature",
      name: "signature",
    },
    {
      type: "string",
      label: "Main Text",
      name: "mainText",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Poem",
      name: "poem",
      ui: {
        component: "textarea",
      },
    },
  ],
};
