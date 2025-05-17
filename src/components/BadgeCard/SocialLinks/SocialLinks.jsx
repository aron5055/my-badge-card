import { LuMail, LuGlobe, LuGithub } from "react-icons/lu";
import { RiTwitterXFill, RiTelegram2Line } from "react-icons/ri";

export default function SocialLinks({ config }) {
  const { email, blog, github, twitter, telegram } = config;

  return (
    <div className="flex justify-center w-full gap-4">
      <a
        href={`mailto:${email}`}
        className="hover:text-blue-500"
        target="_blank"
        title="Email"
      >
        <LuMail size={20} />
      </a>
      <a
        href={telegram}
        className="hover:text-blue-500"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        <RiTelegram2Line size={20} />
      </a>

      <a
        href={blog}
        className="hover:text-blue-500"
        target="_blank"
        rel="noreferrer"
        title="Blog"
      >
        <LuGlobe size={20} />
      </a>
      <a
        href={twitter}
        className="hover:text-blue-500"
        target="_blank"
        rel="noreferrer"
        title="Twitter/X"
      >
        <RiTwitterXFill size={20} />
      </a>
      <a
        href={github}
        className="hover:text-blue-500"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <LuGithub size={20} />
      </a>
    </div>
  );
}
