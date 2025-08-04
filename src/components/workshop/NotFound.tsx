import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary px-4">
      <div className="bg-card/80 backdrop-blur-glass border border-border rounded-3xl p-10 text-center shadow-glow max-w-lg w-full">
        <h1 className="text-5xl font-bold text-primary mb-4 tracking-wide">404</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Oops! The page <code className="text-foreground"></code> does not exist.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
