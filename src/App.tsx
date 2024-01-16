import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function App() {
  
  return (
    <main >
      <div className="flex justify-center w-[100vw] gap-[150px] items-center">
        <h1 className=" font-black max-w-[600px] text-[120px] leading-[0.8] text-gray-100">
          Unleash the Power of Short Links with  
          <span className="text-transparent animate-gradient bg-clip-text bg-[linear-gradient(to_right,theme(colors.yellow.300),theme(colors.yellow.400),theme(colors.yellow.500),theme(colors.yellow.500),theme(colors.yellow.600),theme(colors.yellow.700))]"> hrefto/</span>
        </h1>
        <div className=" bg-[#FFFFFF1A] w-[470px] h-[450px] rounded-[60px] shadow-lg flex flex-col justify-center">
          <Label htmlFor="link" className=" text-xl font-semibold">Your loooong link</Label>
          <Input placeholder="" className="w-[350px]  h-12 text-lg"/>
        </div>
      </div>
    </main>
  )
}

export default App
