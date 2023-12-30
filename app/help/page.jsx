"use client";
import React from 'react'
import { Layout } from '@/components/layout/Layout'

export default function help() {
    const pageTitle = 'Home Page Title';
  return (
    <div>
        <Layout title={pageTitle}>
            <div className="help-section">
                Help
            </div>
        </Layout>
    </div>
  )
}
