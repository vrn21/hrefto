import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';


function App() {
  var [shortenedLink,setShortenedLink] = useState("wallet-hunter-vrn21s-projects.vercel.app/BestSongInDaWorld")  
  return (
    <main className="flex flex-col justify-end item">
      <div className="flex justify-center w-[100vw] gap-[150px] items-center">
        <h1 className=" font-black max-w-[600px] text-[120px] leading-[0.8] text-gray-100">
          Unleash the Power of Short Links with  
          <span className="text-transparent animate-gradient bg-clip-text bg-[linear-gradient(to_right,theme(colors.yellow.300),theme(colors.yellow.400),theme(colors.yellow.500),theme(colors.yellow.500),theme(colors.yellow.600),theme(colors.yellow.700))]"> hrefto/</span>
        </h1>
        <div className="  bg-[#FFFFFF1A] w-[470px] h-[450px] rounded-[60px] shadow-lg flex flex-col justify-center items-center ">
          
            <div>
              <Label htmlFor="link" id="longlink" className=" text-xl font-semibold">Your loooong link:</Label>
              <Input placeholder="https://youtu.be/dQw4w9WgXcQ?si=-14TnqpAB7Fsd3gc" className="w-[350px]  h-12 text-lg"/>
            </div>
            <div>
              <Label htmlFor="text" id="shortened" className=" text-xl font-semibold">Shortened bit</Label>
              <Input placeholder="BestSongInDaWorld" className="w-[350px]  h-12 text-lg"/>
            </div>
            <Button className=" bg-yellow-500 text-2xl font-semibold rounded-xl mt-6 hover:bg-yellow-300">Shorten!</Button>
            <Label className="text-xl font-semibold mt-8">Your shortened link:</Label>
            <div className=" flex flex-row items-center bordered text-xl border-2 rounded-xl border-[#FFFFFF4D] w-[350px] h-12 inline break-inside-avoid-column overflow-hidden text-overflow-ellipsis whitespace-nowrap"  id="shortlink">
              <div className=" hover:bg-gray-600 w-7 h-8 m-1 ml-2 p-1 rounded-xl flex justify-center items-center">
                <ContentCopyRoundedIcon/>
              </div>
              {shortenedLink}
            </div>
            
          
          
        </div>
      </div>
      <footer className="flex justify-center pt-[px] opacity-70">
        Made with ❤️ by&nbsp;<a target="_blank" href="https://github.com/vrn21" className="opacity-100 hover:text-blue-400"> vrn21</a>
      </footer>
    </main>
  )
}

export default App
