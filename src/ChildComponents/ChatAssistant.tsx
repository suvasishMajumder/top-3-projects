


import { useContext, useState } from 'react'
import axios from 'axios'
import carrotImg from '../assets/pictures/mrcarrot.webp'
import ReactMarkdown from 'react-markdown';
import { ThemeContext } from '@/Contexts/ThemeContext';

function ChatAssistant() {
  const [questionValue, setQuestionValue] = useState("");
  const [answer, setAnswer] = useState('');

const {theme } = useContext(ThemeContext);

const hanldeQuestionValue = (event:any) =>{

 setQuestionValue(event.target.value)

}


async function generateAnswers(){


  if(questionValue.length === 0){

    alert('Enter a valid question . The question field is blank !');
    // console.log('Enter a valid question . The question field is blank !');
    return;

  }
  else if(questionValue.length === 1){
    alert('Enter a valid question !');
    // console.log('Enter a valid question !');
    return;

  }


const response = await  axios({

    url: import.meta.env.VITE_GEMINI_API_URL,
    method:'POST',
    data:{
      "contents": [{
        // "parts":[{"text": "Explain why typescript in very important for web development ?"}]
        "parts":[{"text": questionValue}]

        }]
       }



  })



  // console.log(response['data']['candidates'][0]['content']['parts'][0].text);
  const ans = response['data']['candidates'][0]['content']['parts'][0].text;
  setAnswer(ans)

}


  return(


<>
<div className={`w-[100vw] min-h-[100vh] flex flex-col items-center overflow-x-hidden space-y-9 
  ${theme === 'light' ? 'bg-[#e0ffe8]' : 'bg-gray-950'}`}>

<div className={`w-full flex justify-center items-center text-center p-4 md:h-20
  ${theme === 'light' ? 'bg-[#007025]' : 'bg-gray-800'} `}>

<h3 className="text-2xl text-[#e0ffe8]">Have you any question related to Veganism ? Ask AI Powered <b>Mr. Carrot </b> </h3>

</div>



<div className={`container shadow-2xl rounded-xl h-[70vh] w-[100vw] border-2
 ${theme === 'light' ? 'bg-[#007025] border-black' : 'bg-gray-800 border-white'}  flex justify-center items-center flex-col space-y-10`}>

<img src={carrotImg} className='h-40 w-40 shadow-xl' alt="Avatar" loading='lazy' />
    <h1 className="text-[#E0FFE8] text-2xl text-center">Hi ! I'm Mr. Carrot  , your AI powered doubt solver </h1>


<input type='text' name="" className={`${theme === 'light' ? 'bg-white' : 'bg-gray-700 text-white'} 
p-5 placeholder:text-xs sm:placeholder:text-lg w-64 sm:w-96 shadow-xl rounded-xl`} 
 value={questionValue}
 onChange={hanldeQuestionValue} placeholder='Enter any question related to veganism ....'  id="" />




    <button onClick={generateAnswers} type="button" className="text-white bg-gradient-to-r from-[#FF7F50] to-[#f54627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#FFB6C1] dark:shadow-lg
      font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click To Get The Answer</button>


      

<button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg
 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 
 py-2.5 text-center me-2 mb-2 " onClick={(e) => {
  setQuestionValue(e.target.value = "");
  setAnswer("")


 }} >Reset All </button>


      </div>


<div className="answerBox flex justify-center items-center">
<p className={`answer p-4 w-3/4 h-auto text-sm  text-left font-medium
   ${theme === 'light' ? 'text-[#007025]' : 'text-zinc-300'}`}> <b>{answer ? "Mr.Carrot:" : ""}</b> 
<ReactMarkdown>{answer}</ReactMarkdown></p>
</div>
                                                                                       

</div>


</>
  )


}

export default ChatAssistant;
