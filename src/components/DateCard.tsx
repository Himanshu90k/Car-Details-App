import Date from "./Date"

const DateCard = () => {
    return (
        <div className="flex flex-col items-center gap-y-1 w-30 h-40 bg-white border border-solid border-yearRed shadow-yearShadow rounded-3xl absolute z-10 -top-2">
            <Date />
            <svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="52" height="3" viewBox="0 0 52 3" fill="none">
                <path d="M2 1.5H50" stroke="#E03F3F" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        </div>
    )
}

export default DateCard