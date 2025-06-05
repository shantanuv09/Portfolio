import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import TerminalText from "../components/TerminalText";

const NotFoundPage = () => {
  return (
    <div className="cyber-section flex flex-col items-center justify-center min-h-[70vh]">
      <div className="container-custom max-w-2xl text-center">
        <div className="cyber-terminal mb-8">
          <TerminalText
            text="$ cd /page"
            className="text-sm text-cyber-green mb-2"
          />
          <TerminalText
            text="bash: cd: /page: No such file or directory"
            className="text-sm text-cyber-red mb-4"
            typeSpeed={20}
          />

          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-24 w-24 text-cyber-red" />
          </div>

          <h1 className="text-5xl font-bold mb-4 text-cyber-red">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>

          <TerminalText
            text="The requested URL does not exist in this secure environment."
            className="text-xl text-white mb-8"
            typeSpeed={30}
          />

          <div className="inline-block cyber-card p-4 text-left">
            <p className="font-mono text-sm text-cyber-light mb-2">
              Try these commands:
            </p>
            <p className="font-mono text-sm text-white mb-1">
              <span className="text-cyber-green">$</span> cd /home
            </p>
            <p className="font-mono text-sm text-white mb-1">
              <span className="text-cyber-green">$</span> ls -la /projects
            </p>
            <p className="font-mono text-sm text-white">
              <span className="text-cyber-green">$</span> man contact
            </p>
          </div>
        </div>

        <Link to="/" className="cyber-button inline-flex">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
