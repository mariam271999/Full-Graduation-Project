import { Component } from "react";
import './Header.css';
import axios from "axios" ;
import jwt_decode from "jwt-decode";
import {Link} from 'react-router-dom';

class Header extends Component {
    
    state={
        jobs:[],
        target_job:{
            targetJob:''
        }
}

   userId =localStorage.getItem("userId");
    ReciveData = async(e ) => {
        // https://reqbin.com/sample/post/json

        let data= await axios.get("https://sara-app-16.herokuapp.com/jobs")
        data =data.data.data
        console.log(data);
        
        this.setState({
            jobs:data
        }
        )
        }

        componentDidMount(){
            this.ReciveData()
        }
    searchConsultant= async(e)=>{
        // e.preventDefault();
        let token = localStorage.getItem("token");
        e.preventDefault();

        if(token){
          
          let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/consultant/${this.userId}` , this.state.target_job );
          console.log(data);
          sessionStorage.setItem("careerConsult", JSON.stringify(data.yourCareerPath));   
          
              }
       else {
                //  e.preventDefault();

            alert("please login first");
            window.location.pathname = "login"
       }
    }

    searchCareerPath= async(e)=>{
        // e.preventDefault();
        let token = localStorage.getItem("token");
        e.preventDefault();

        if(token){
          
          let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/careerPath/${this.userId}` , this.state.target_job );
          console.log(data);
          sessionStorage.setItem("careerPath", JSON.stringify(data.yourCareerPath));   
            
              }
       else {
                //  e.preventDefault();

            alert("please login first");
            window.location.pathname = "login"
       }
    }

    
    getFormData =(e)=> {
        this.state.target_job.targetJob = e.target.value ;
        this.setState({
            target_job:{
                targetJob:this.state.target_job.targetJob
            }
        })
        console.log(this.state.target_job.targetJob);  
    }


    
    

    
    render(){
  
       
       

          


       
       
                return(
                    <>
                    <div className="bg d-flex justify-content-center align-items-center">
                     <div>
                         <h1 className="text-white">Find Your Next Job</h1>
                         <h2 className="text-white">Make your training plan clear</h2>
                         <div className="row form-container mt-4">
                             <form>
                                

                                 <select name ="educationLevel"  onChange={this.getFormData}  id="educationLevel" className=" borderLeft headerInput">
                                <option value="choose"  selected disabled> The Target Job</option>
                                

                                62d0a27633c0e3fab87dc1fb
                                junior Database Manager
                                                <option onClick={ localStorage.setItem("jobid", '62d08701fdecb1bbfe1f2284')} value='62d08701fdecb1bbfe1f2284' > Junior Database Administrators </option>
                                                <option onClick={ localStorage.setItem("jobid", '62d089a2fdecb1bbfe1f228c')} value='62d089a2fdecb1bbfe1f228c'> senior Database Administrators </option>
                                                <option onClick={ localStorage.setItem("jobid", '62d0a27633c0e3fab87dc1fb')} value='62d0a27633c0e3fab87dc1fb'>junior Database Manager</option>
                                                <option onClick={ localStorage.setItem("jobid", '62d0a3b733c0e3fab87dc204')} value='62d0a3b733c0e3fab87dc204'> senior Database manager </option>
                                                {/* <option onClick={ localStorage.setItem("jobid", '62d0b51d33c0e3fab87dc385')} > fresh Database manager </option> */}


                                           
 </select>
 <Link to="/careerchoice" onClick={this.search} name="/careerchoice" className="headerBtn border" id="btn"  >career path </Link> 
                                 <Link to="/training" onClick={this.search} name="/training" className="headerBtn border" id="btn"  >consultation </Link> 
                             </form>
                         </div>
                     </div>
                    </div>
                    </>
                )
                
  
       
    }


}
export default Header;