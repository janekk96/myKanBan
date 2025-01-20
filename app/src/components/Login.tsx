import { SUPABASE_CLIENT } from "@/Consts/supabase";
import { ThemeMinimal } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";

function Login() {
  //TODO make the login page look better
  return (
    <div className="login">
      <h1>My KanBan</h1>
      <Auth
        supabaseClient={SUPABASE_CLIENT}
        appearance={{ theme: ThemeMinimal }}
      />
    </div>
  );
}

export default Login;
