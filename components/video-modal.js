import React, { useState } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function YouTubeModal({ videoId, isOpen, setIsOpen }) {

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`${videoId}`}
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}

