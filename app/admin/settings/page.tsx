"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Save } from 'lucide-react'

const settingsSchema = z.object({
  siteName: z.string().min(2, { message: "Site name must be at least 2 characters." }),
  siteDescription: z.string().min(10, { message: "Site description must be at least 10 characters." }),
  contactEmail: z.string().email({ message: "Invalid email address." }),
  maxUploadSize: z.number().min(1, { message: "Max upload size must be at least 1 MB." }),
})

type SettingsFormData = z.infer<typeof settingsSchema>

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      siteName: 'VoiceNFT',
      siteDescription: 'A marketplace for voice NFTs',
      contactEmail: 'contact@voicenft.com',
      maxUploadSize: 10,
    },
  })

  const onSubmit = (data: SettingsFormData) => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="siteName">Site Name</label>
              <Input
                id="siteName"
                {...register('siteName')}
              />
              {errors.siteName && <p className="text-red-500 text-sm mt-1">{errors.siteName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="siteDescription">Site Description</label>
              <Textarea
                id="siteDescription"
                {...register('siteDescription')}
              />
              {errors.siteDescription && <p className="text-red-500 text-sm mt-1">{errors.siteDescription.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="contactEmail">Contact Email</label>
              <Input
                id="contactEmail"
                type="email"
                {...register('contactEmail')}
              />
              {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="maxUploadSize">Max Upload Size (MB)</label>
              <Input
                id="maxUploadSize"
                type="number"
                {...register('maxUploadSize', { valueAsNumber: true })}
              />
              {errors.maxUploadSize && <p className="text-red-500 text-sm mt-1">{errors.maxUploadSize.message}</p>}
            </div>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? 'Saving...' : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Save Settings
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}