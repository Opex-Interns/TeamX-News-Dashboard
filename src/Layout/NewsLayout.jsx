import React from 'react'

function NewsLayout(props) {
  return (
    <main className="w-full font-Roboto">
      <div className="rounded-2xl overflow-hidden shadow-md bg-white h-full flex flex-col">
        {/* Image */}
        <img
          src={props.image}
          alt={props.headline}
          className="object-cover h-48 w-full"
        />

        {/* Content */}
        <aside className="border border-[#E5E7EB] py-3 px-4 flex flex-col gap-2 flex-grow">
          {/* Category + Time */}
          <span className="flex flex-wrap gap-2 items-center text-sm">
            <h6 className="bg-[#2563eb] rounded-xl px-3 py-1 text-white text-xs uppercase">
              {props.category}
            </h6>
            <p className="text-[#6b7280]">{props.datetime}</p>
          </span>

          {/* Headline */}
          <h3 className="text-[#111827] text-lg md:text-xl font-semibold">
            {props.headline}
          </h3>

          {/* Summary */}
          <p className="text-[#4b5563] font-normal text-sm md:text-base flex-grow">
            {props.summary}
          </p>

          {/* Link */}
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563eb] font-medium hover:underline mt-auto"
          >
            Read More →
          </a>
        </aside>
      </div>
    </main>
  )
}


export default NewsLayout
