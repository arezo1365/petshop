import React from "react";

export default function Error({ err }) {
  return <div className='alert alert-danger'>{err}</div>;
}
