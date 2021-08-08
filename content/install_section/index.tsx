import { URLS } from "../../api/routes";
import CodeBlock from "../../components/CodeBlock";

export const InstallSection = () => {
  const shell = (
    <div key="shell" className="my-4 text-gray-700">
      <p className="py-2">Shell (Mac, Linux):</p>
      <CodeBlock
        language="bash"
        code={`curl -fsSL https://cli.secman.dev/install.sh | bash`}
      />
    </div>
  );
  const homebrew = (
    <div key="homebrew" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href={URLS.homebrew} className="link">
          Homebrew
        </a>{" "}
        (Mac, Linux):
      </p>
      <CodeBlock
        language="bash"
        code={`brew tap scmn-dev/smx\nbrew install secman`}
      />
    </div>
  );
  const powershell = (
    <div key="powershell" className="my-4 text-gray-700">
      <p className="mb-2">PowerShell (Windows):</p>
      <CodeBlock
        language="bash"
        code={`iwr -useb https://cli.secman.dev/install.ps1 | iex`}
      />
    </div>
  );
  const scoop = (
    <div key="scoop" className="my-4 text-gray-700">
      <p className="mb-2">
        <a
          href={URLS.scoop}
          className="link"
        >
          Scoop
        </a>{" "}
        (Windows):
      </p>
      <CodeBlock
        language="bash"
        code={`scoop bucket add secman https://github.com/scmn-dev/secman\nscoop install secman`}
      />
    </div>
  );

  return (
    <>
      {shell}
      {powershell}
      {homebrew}
      {scoop}
    </>
  );
};
