import { useState, useEffect, createElement } from "react";

const TextLoop = ({ props, tag }) => {
  const object = props.siteOfDay;
  const array = [object.siteName, object.rating];

  useEffect(() => {
    const container = document.getElementById(`${tag}`);
    let i = 0;
    const loop = () => {
        let subtitle1;
        let subtitle2;
        (i%2==0)?subtitle1="By":subtitle1="Score";
        (i%2==0)?subtitle2="Score":subtitle2="By";

        container.innerHTML =`
        <div">
          <div class="base-titles">
            <div id='${tag}-items-base'>
                <p class="text" >${subtitle1}</p>
                <p>${subtitle2}</p>
            </div>
          </div>
          <div class="base-details">
            <div id='${tag}-items'>
                <p>${array[i]}</p>
                <p>${array[(i + 1) % array.length]}</p>
            </div>
          </div>
        </div>
        `;
        i = (i + 1) % array.length;

        const translateY=()=>{
            const myDiv = document.getElementById(`${tag}-items`);
            const myDivBase = document.getElementById(`${tag}-items-base`);
            myDiv.classList.add("banner-translateY");
            myDivBase.classList.add("banner-translateY")
        }
        setTimeout(translateY, 1000)
        setTimeout(loop, 3500);
    };
    loop();
    }, [tag]);

  return null;
};

export default TextLoop;
