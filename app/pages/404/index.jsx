import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function NotFind() {
  const params = useRouteMatch()
  console.log(params)
  return (
    <div className="not-find">404. xuwentao.</div>
  )
}
