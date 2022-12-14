
import { BsSearch } from "react-icons/bs";

export default function Attendance_student_table({children}) {
    return (
        <div className="flex">
            <div className="shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in p-4 w-full">
                
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">Attendance</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="flex mt-2 justify-center py-2 pl-2">
                    <div className="w-40 p-2 border-2 border-blue-500 rounded-md ">
                        <div className="absolute mt-2.5 flex items-center px-2">
                            <BsSearch className="text-gray-500 text-md mt-0.5"/>
                        </div>
                        <input type="text" className="w-full rounded px-8 text-md font-semibold bg-white outline-none
                        py-2 placeholder:text-sm placeholder:font-normal text-gray-500" placeholder ="search..."></input>
                    </div>
                    <div className="flex justify-center items-center mx-4">
                    <div>
                        <select name="subject" id="cars" className="text-blue-500 bg-white border-2 border-blue-500 rounded-md text-md outline-none p-4">
                            <option value="subject 1">CSE 2003</option>
                            <option value="subject 2">MAT 3001</option>
                            <option value="subject 3">ENG 1001</option>
                            <option value="subject 4">HUM 2001</option>
                            <option value="subject 5">CAO 1001</option>
                           
                        </select>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-center">
                    <table className="">
                        <thead className= "border-b-2 border-blue-500">
                            <tr className="font-normal">
                                <th className="py-3">Date</th>
                                <th className="py-3">Status</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">12-5-22</th>
                                <th className="py-4 px-8 font-normal">P</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">14-5-22</th>
                                <th className="py-4 px-8 font-normal">A</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">16-5-22</th>
                                <th className="py-4 px-8 font-normal">P</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">18-5-22</th>
                                <th className="py-4 px-8 font-normal">P</th>
                            </tr>
                        </thead>
                    </table> 
                    </div>
                </div>
            </div>  
        </div>
    )
}