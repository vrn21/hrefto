// export default App;
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import React, { useState } from "react";

interface SetData {
  key: string;
  value: string;
}

function App() {
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [retrievedData, setRetrievedData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // Function to call the API for setting the link

  const setLink = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: SetData = {
      key: key,
      value: value,
    };

    try {
      const res = await fetch("http://127.0.0.1:8080/set", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.text(); // Assuming the API returns text response
      setResponse(result);
      console.log(result);
    } catch (err) {
      setError(`Error: ${(err as Error).message}`);
    }
  }; // Function to call the API for retrieving the link based on the key

  const getLink = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://127.0.0.1:8080/get?key=${encodeURIComponent(key)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.text(); // Assuming the API returns a text response
      setRetrievedData(result); // Set the retrieved data state
      console.log(result);
    } catch (err) {
      setError(`Error: ${(err as Error).message}`);
    }
  }; // Function to copy the shortened link to clipboard

  const copyToClipboard = () => {
    if (response) {
      navigator.clipboard.writeText(`http://127.0.0.1:8080/${response}`);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main className="flex flex-col justify-end item">
      <div className="flex justify-center w-[100vw] gap-[150px] items-center">
               {" "}
        <h1 className="font-black max-w-[600px] text-[120px] leading-[0.8] text-gray-100">
                    Unleash the Power of Short Links with         
          <span className="text-transparent animate-gradient bg-clip-text bg-[linear-gradient(to_right,theme(colors.yellow.300),theme(colors.yellow.400),theme(colors.yellow.500),theme(colors.yellow.500),theme(colors.yellow.600),theme(colors.yellow.700))]">
            hrefto/
          </span>
        </h1>
        <div className="bg-[#FFFFFF1A] w-[470px] h-[450px] rounded-[60px] shadow-lg flex flex-col justify-center items-center">
          <div>
            <Label
              htmlFor="link"
              id="longlink"
              className="text-xl font-semibold"
            >
                            Your loooong link:            
            </Label>
            <Input
              className="w-[350px] h-12 text-lg"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <Label
              htmlFor="text"
              id="shortened"
              className="text-xl font-semibold"
            >
                            Shortened bit            
            </Label>
            <Input
              className="w-[350px] h-12 text-lg"
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <Button
            className="bg-yellow-500 text-2xl font-semibold rounded-xl mt-6 hover:bg-yellow-300"
            onClick={setLink}
          >
                        Shorten!          
          </Button>
                   {" "}
          <Label className="text-xl font-semibold mt-8">
                        Your shortened link:         
          </Label>
          <div
            className="flex flex-row items-center bordered text-xl border-2 rounded-xl border-[#FFFFFF4D] w-[350px] h-12 inline break-inside-avoid-column overflow-hidden text-overflow-ellipsis whitespace-nowrap"
            id="shortlink"
          >
            <a
              href={response ? `http://127.0.0.1:8080/${response}` : "#"}
              className="ml-2 text-gray-200 truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              {response
                ? `http://127.0.0.1:8080/${response}`
                : "No link generated yet"}
            </a>
            <div
              className="hover:bg-gray-600 w-7 h-8 m-1 ml-2 p-1 rounded-xl flex justify-center items-center cursor-pointer"
              onClick={copyToClipboard}
            >
                            <ContentCopyRoundedIcon />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center pt-[px] opacity-70">
                Made with ❤️ by&nbsp;        
        <a
          target="_blank"
          href="https://github.com/vrn21"
          className="opacity-100 hover:text-blue-400"
        >
                    from vrn21
        </a>
      </footer>
    </main>
  );
}

export default App;
