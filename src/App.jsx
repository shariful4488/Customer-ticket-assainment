import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import CustomerTickets from './components/CustomerTickets/CustomerTickets';
import TasksSection from './components/TasksSection/TasksSection';
import { toast, ToastContainer } from 'react-toastify';
import ResolvedSection from './components/ResolvedSection/ResolvedSection';

function App() {
  const [inProgress,setInProgress] = useState(0);
  const [resolved,setResolved] = useState(0);
  const [tick,setTick] =useState([]);
  const [taskSection,setTaskSection] = useState([]);
  const [resolvedData,setResolvedData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("./customer.json");
      const data = await res.json();
      setTick(data);
    }
    fetchData();
  },[]);




  const handleCardClick = (card) => {
    setInProgress(inProgress + 1);
    setTaskSection([...taskSection,card]);
    toast("In-Progress!");
  }

  const handleResolveTask = (card) => {
    if(inProgress > 0){
      setResolved(resolved + 1);
      setInProgress(inProgress - 1);
      const newCard1 = taskSection.filter((c) => c.id !== card.id);
      setTaskSection(newCard1);
      setResolvedData([...resolvedData,card]);

      const newCard2 = tick.filter((c) => c.id !== card.id);
      setTick(newCard2);
      toast("Completed");
    } else {
       return;
    }
  }
  
  return (
    <>
       <Navbar/>
       <main className='px-4 max-w-7xl mx-auto'>
        <div className='mt-11'>
          <Banner inProgress={inProgress} resolved={resolved}/>
        </div>
        <div className='flex md:grid flex-col-reverse md:grid-cols-12 justify-between w-full mt-11 gap-2'>
          <div className='md:col-span-9'>
          <CustomerTickets ticketss = {tick} handleCardClick={handleCardClick} ></CustomerTickets>  
        </div>

          <div className='md:col-span-3'>  
          <TasksSection taskSection={taskSection} handleResolveTask= {handleResolveTask} ></TasksSection>
          <ResolvedSection resolvedData={resolvedData}></ResolvedSection>
        </div>
        </div>
       </main>
       <Footer/>
       <ToastContainer position='top-right' style={{width:"40%",marginLeft:"59%"}}></ToastContainer>
    </>
  )
}

export default App
