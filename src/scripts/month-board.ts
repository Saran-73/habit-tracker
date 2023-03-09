import { createElement } from "../utils/dom-methods";


export const createMonthContainer = (totalDays: number, monthId:string, nextMonth?: boolean) => {
    const MONTH_CONTAINER_WRAPPER = document.querySelector(".month-parent-container");

    const MONTH_CONTAINER = createElement('section');
    MONTH_CONTAINER.setAttribute("class", "month-container");
    MONTH_CONTAINER.setAttribute("id", monthId);
 
    let days = totalDays;
    // if the month is february just add an extra block but hide that one 
    if (totalDays === 28) {
        days = 29
    }

    for (let i = 0; i < days; i++) {
        const checkmarkDiv = createElement("div");
        if (totalDays === 28 && i === 28) {
            checkmarkDiv.setAttribute("class", "checkmark-block-hidden")
        } else {
            checkmarkDiv.setAttribute("class", "checkmark-block")
        }
        checkmarkDiv.addEventListener("click", handleIsChecked)
        MONTH_CONTAINER?.append(checkmarkDiv);
    }


    if (nextMonth) {
        MONTH_CONTAINER_WRAPPER?.append(MONTH_CONTAINER)   
        MONTH_CONTAINER.scrollIntoView({block: "start", behavior: "smooth"})

    } else {
        MONTH_CONTAINER_WRAPPER?.prepend(MONTH_CONTAINER)
        MONTH_CONTAINER.scrollIntoView({block: "nearest", behavior: "smooth"})
    }


}

const handleIsChecked = (element: any) => {
    const xMarkClassName: string = "isChecked"; // class name that has a bg set to x mark using svg
    const currentElement = element.target;
    const isChecked: boolean = currentElement.classList.contains(xMarkClassName);

    if (isChecked) {
        currentElement.classList.remove(xMarkClassName)
    } else {
        currentElement.classList.add(xMarkClassName)
    }
}
