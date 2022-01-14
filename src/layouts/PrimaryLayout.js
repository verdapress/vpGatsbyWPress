import react from "react"

const PrimaryLayout = (props) =>
(
<div>
   <Header/>
   {props.children}
<Footer/>
</div>
);
export default PrimaryLayout;