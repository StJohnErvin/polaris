---
name: Video thumbnail
category: Images and icons
keywords:
  - video
  - VideoThumbnail
  - updates
  - new features
  - video thumbnail
  - feature thumbnail
  - education
  - contextual learning system
examples:
  - fileName: video-thumbnail-basic.tsx
    title: Basic video thumbnail
    description: Use as a play button for a video player within a media card.
  - fileName: video-thumbnail-with-progress.tsx
    title: Video thumbnail with progress
    description: Use to indicate the video’s play progress in relation to its duration.
---

# Video thumbnail

Video thumbnails are a clickable placeholder image. When clicked, it opens a video player within a modal or full screen.

---

## Best practices

Video thumbnails should:

- Be used with a media card
- Use an image that communicates the subject of the video
- Include a video timestamp
- Capture an image from the video to give a preview of the video content
- Be cropped to a 16:9 aspect ratio
- Be centered on the subject and avoid cropping of important details, like a person’s head

---

## Required components

- The video thumbnail should be wrapped in the [media card](https://polaris.shopify.com/components/media-card) component.

---

## Related components

- To present a small visual anchor for an object, [use the thumbnail component](https://polaris.shopify.com/components/thumbnail)

---

## Accessibility

<!-- content-for: android -->

See Material Design and development documentation about accessibility for Android:

- [Accessible design on Android](https://material.io/design/usability/accessibility.html)
- [Accessible development on Android](https://developer.android.com/guide/topics/ui/accessibility/)

<!-- /content-for -->

<!-- content-for: ios -->

See Apple’s Human Interface Guidelines and API documentation about accessibility for iOS:

- [Accessible design on iOS](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessibility/)
- [Accessible development on iOS](https://developer.apple.com/accessibility/ios/)

<!-- /content-for -->

<!-- content-for: web -->

Images included in video thumbnails are implemented as decorative background images so that they’re skipped by screen readers.

The play button is keyboard accessible and the `aria-label` includes a timestamp when the `videoLength` prop is set. For example, an 80 second video reads as “Play video of length 1 minute and 20 seconds”. If no `videoLength` prop is provided, the default label reads “Play video”.

<!-- /content-for -->
