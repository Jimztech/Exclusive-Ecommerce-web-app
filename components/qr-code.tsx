"use client";

import { QrCode } from "@ark-ui/react/qr-code";

export default function Basic() {
  return (
    <QrCode.Root
      value="https://github.com/jimztech"
    >
      <QrCode.Frame className="w-20 h-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
        <QrCode.Pattern className="fill-gray-900 dark:fill-white" />
      </QrCode.Frame>
    </QrCode.Root>
  );
}
