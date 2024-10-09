import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: PropsWithChildren) {

  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/signin", { replace: true });
    }
  }, [user, navigate]);
  return <>{children}</>;
}
