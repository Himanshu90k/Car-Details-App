interface MonthProps {
    month: string
}

const Month: React.FC<MonthProps> = ({month}) => {
    return (
        <div className="flex justify-center items-center w-9 h-6 rounded bg-customRed">
            <p className="font-inter font-medium text-xs text-white">{month}</p>
        </div>
    )
}

export default Month