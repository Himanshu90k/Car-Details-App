const SearchBar: React.FC = () => {
    return (
        <div className="flex justify-center mt-8">
            <form className=" flex justify-center items-center gap-5 border-2 border-solid border-customBlue rounded-45 w-84 h-11.25">
                {/* search box */}
                <div className="flex flex-col items-center">
                    <input className="h-5 w-60 font-medium font-montserrat text-base text-center opacity-60" 
                        type="search"
                        placeholder="search by car no: DL01AB1"
                    />

                    {/* Underline below input box */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="248" height="7" viewBox="0 0 248 7" 
                        fill="none">
                        <path 
                            opacity="0.8" 
                            d="M5 3L0 0.613249V6.38675L5 4V3ZM243 4L248 6.38675V0.613249L243 3V4ZM4.5 4H243.5V3H4.5V4Z" 
                            fill="black"
                        />
                    </svg>
                </div>
                
                {/* Search lens */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="34" 
                    height="34" 
                    viewBox="0 0 34 34" 
                    fill="none"
                >
                    <rect 
                        width="34" 
                        height="34"    
                        fill="white"
                    />
                    <path 
                        d="
                            M29.75 29.75
                            L23.5974 23.5974
                            M23.5974 23.5974
                            C24.6498 22.545 25.4847 21.2956 26.0542 19.9205
                            C26.6238 18.5455 26.917 17.0717 26.917 15.5833
                            C26.917 14.095 26.6238 12.6212 26.0542 11.2461
                            C25.4847 9.87109 24.6498 8.62168 23.5974 7.56925
                            C22.545 6.51683 21.2956 5.682 19.9205 5.11243
                            C18.5455 4.54286 17.0717 4.24971 15.5833 4.24971
                            C14.095 4.24971 12.6212 4.54286 11.2461 5.11243
                            C9.87109 5.682 8.62168 6.51683 7.56925 7.5692
                            C5.44378 9.69472 4.24971 12.5775 4.24971 15.5833
                            C4.24971 18.5892 5.44378 21.472 7.56925 23.5974
                            C9.69472 25.7229 12.5775 26.917 15.5833 26.917
                            C18.5892 26.917 21.472 25.7229 23.5974 23.5974Z
                        " 
                        stroke="#182C83" 
                        stroke-width="2.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                    />
                </svg>
            </form>
        </div>
    )
}

export default SearchBar