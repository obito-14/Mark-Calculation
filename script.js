const calculateFormEl=document.getElementById("calculateForm");
const resultEl =document.getElementById("result");

const calculateMarks=(event)=>{
    const maxMarks=400;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);

    const data={};
    formData.forEach((value,key) => {
        data[key] = +value;
    });
   const totalMarks = data.maths + data.science + data.hindi + data.english; 
   const percentage = Math.round((totalMarks/maxMarks)*100).toFixed(2);
  
   resultEl.innerText =`You Have Got ${totalMarks} Out Of ${maxMarks} And Your Percentage is ${percentage}%`
};