

<html>

   <head>
      <title>Login</title>

				<form action = "" method = "post">
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <label>Email  :</label><input type = "text" name = "email" /><br /><br />
                  <label>Password  :</label><input type = "password" name = "password"  /><br/><br />
                  <input type = "submit" value = " Submit "/><br />
               </form>
   </head>

</html>
