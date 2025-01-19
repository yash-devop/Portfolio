import { SerifHeading } from "./SerifHeading";

export default function Footer() {
  return (
    <>
        <footer className="pt-20 border-t flex flex-col gap-8 items-center justify-center dark:border-secondary-dark/10">
          <div className="max-w-xl text-center flex flex-col text-secondary dark:text-primaryDark">
            <span>
              If you have any questions, feel free to send me a message via
              social platforms or write me an email to{" "}
              <span className="text-black font-medium dark:text-white">yashkamble.dev@gmail.com</span>
            </span>
            <SerifHeading />
          </div>
        </footer>
    </>
  );
}
