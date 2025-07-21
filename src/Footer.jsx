import SohamFoot from "./assets/Sascii.png";
function Footer() {
  return (
    <>
      <div className="block pb-10 ">
        <img src={SohamFoot} alt="ASCII Logo" className="mx-auto" />
      </div>
      {/* <pre className="hidden sm:block">{`...ascii here...`}</pre> */}
    </>
  );
}

export default Footer;
