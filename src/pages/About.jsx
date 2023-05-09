import Header from "../components/Header";
import Footer from "../components/Footer";
const About = ()=> (
    <div className="pt-12">
        <Header/>
        <h1 className="text-2xl decoration-blue-950 font-bold font-mono">About 6ixElement</h1>
        <div className="flex gap-20 pt-12 ">
            <div className="w-[50%]">
                <p className="font-mono text-xl">6ixElement Entertainment Group is based in Toronto and we are here to change the model / talent agency model forever. 
                    Where most agencies do little to nothing to grow and develop their models and talent, 6ixElement provides you with the
                     necessary push and support, depending on where you are in your career progression. We work both with experienced individuals 
                     and people who are just getting their first start in the industry. Wherever you are in your career, we can provide you with 
                     the jobs and opportunities that are right for you, with expert guidance along the way.
                    <br /><br />
                    Are you looking for talented models, actors, dancers, artists or any other talent?
                    <br /><br />
                    6ixElement will provide reliable people for your gig that have been well-coached and maintain a professional attitude at all times.</p>
            </div>
            <div className="w-[50%] ">
                <img src="https://6ixelement.club/images/about-image.jpg" alt="" className="h-[80%] "/>
            </div>

        </div>
        
        <Footer/>
    </div>
);

export default About;