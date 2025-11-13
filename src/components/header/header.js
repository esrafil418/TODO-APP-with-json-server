import { El } from "../../utils/el";

export function Header() {
  return El({
    element: "div",
    className:
      "w-full bg-[#6200ea] h-12 flex justify-between items-center p-2 sm:p-1 xs:p-1",
    children: [
      El({
        element: "div",
        className: "flex gap-2 flex",
        children: [
          El({
            element: "img",
            src: "/icons/bars.png",
            className: "w-6 h-6 lg:h-8 lg:w-8",
          }),
          El({
            element: "div",
            className:
              " text-lg xl:text-xl lg:mx-1 flex justify-center items-center",
            children: [
              El({
                element: "p",
                className: "text-white",
                innerText: "My To-Do Tasks",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex p-2 gap-1 justify-center items-center xl:gap-5",
        children: [
          El({
            element: "div",
            className:
              "flex justify-center items-center hidden lg:flex md:flex",
            children: [
              El({
                element: "div",
                className:
                  "fa-solid fa-magnifying-glass text-white bg-[#7926ed] p-2 rounded-l-sm cursor-pointer",
              }),
              El({
                element: "input",
                className:
                  "p-1 bg-[#7926ed] outline-none rounded-r-sm text-gray-300 ",
                placeholder: "Search",
              }),
            ],
          }),
          El({
            element: "button",
            className:
              "fa-solid fa-filter text-white text-xl xl:text-2xl mx-2 cursor-pointer",
          }),
          El({
            element: "button",
            id: "plusBtn",
            type: "button",
            className:
              "bg-white text-[#6200ea] rounded-xs p-1 xl:h-[25px] text-sm xl:text-xl cursor-pointer flex items-center justify-center",
            children: [
              El({
                element: "i",
                className: "fa-solid fa-plus",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
