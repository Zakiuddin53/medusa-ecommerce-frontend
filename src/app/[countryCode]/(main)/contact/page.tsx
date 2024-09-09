export default function contact() {
  return (
    <div>
      <h1 className="mb-10 mt-10 text-center text-lg font-bold">Contact Us</h1>
      <p className="m-auto w-9/12 border-solid text-center font-normal tracking-widest">
        We would like to assist you in any way that we can. Our team is
        available via email Monday through Friday, 9am to 4pm Pacific Time.
      </p>

      <p className="m-auto mt-8 w-9/12 text-center font-normal tracking-widest">
        {" "}
        We love hearing from you!
      </p>

      <h1 className="mb-10 mt-10 text-center text-lg font-bold">By Email</h1>
      <a
        className="m-auto flex w-9/12 justify-center font-normal tracking-widest"
        href="https://mail.google.com"
      >
        xyz@gmail.com
      </a>
    </div>
  );
}
