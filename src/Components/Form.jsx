import React, { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

function Form(props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);

      await api.post("/subscribers", { email });
      toast.success("✅ Subscription successful! Check your inbox.");
      setEmail("");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast("⚠️ Already subscribed!", { icon: "⚠️", style: { color: "#CA8A04" } });
      } else {
        toast.error("❌ Failed to subscribe. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row w-full sm:w-[70%] md:max-w-[50%] lg:max-w-[30%] p-2 bg-white rounded-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-[#D97706] transition disabled:opacity-50"
      >
        {loading ? "Subscribing..." : props.linkName}
      </button>
    </form>
  );
}

export default Form;
