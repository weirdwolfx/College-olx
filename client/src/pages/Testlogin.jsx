import React, { useState } from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const Testlogin = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")

  const handleBackendLogin = async (idToken) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken })
      })

      const data = await response.json()

      // ❌ If backend rejects (non-VNIT)
      if (!response.ok) {
        setUser(null)         // ensure NO profile shown
        setError(data.message) // show only error text
        return
      }

      // ✔️ Success case
      localStorage.setItem("token", data.token)
      console.log("backend verification successful  ")
      console.log("Backend response:", data)

      setError("")
      setUser(data.user)
     // window.location.href = "/"

    } catch (err) {
      console.error("Backend error:", err)
      setError("Something went wrong. Try again.")
    }
  }

  return (
    <div style={{ marginTop: '120px', textAlign: 'center' }}>
      <h2>College OLX Login</h2>
      <p>Only @students.vnit.ac.in allowed</p>

      {/* ❗Only show error + retry */}
      {error && (
        <div style={{color:"red", marginBottom:"15px"}}>
          {error}
          <button 
            onClick={() => setError("")} 
            style={{ display:"block", margin:"10px auto", padding:"6px 12px" }}
          >
            Retry Login
          </button>
        </div>
      )}

      {/* No user yet → show Google Login button */}
      {!user && !error && (
        <GoogleLogin
          onSuccess={
          

            (res) => {
                //console google jwt token
          console.log("google jwt", res.credential);
                handleBackendLogin(res.credential)}}
          onError={() => setError("Google Login Failed")}
        />
      )}

      {/* If user logged in (only VNIT), show logout */}
      {user && (
        <button
          onClick={() => {
            googleLogout()
            localStorage.removeItem("token")
            setUser(null)
          }}
          style={{ marginTop:"20px" }}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default Testlogin
