import React from 'react';
import { Button } from './Button';

interface WayfindingAppLinkProps {
  title: string;
  description: string;
  image?: string | null;
  color: string;
  link: string;
  installed: boolean;
}

const WayfindingAppLink = ({
  link,
  title,
  description,
  image = null,
  color,
  installed,
}: WayfindingAppLinkProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-2">
        {image !== null && image !== '' ? (
          <img
            src={image}
            className="h-8 w-8 rounded"
            style={{ backgroundColor: color }}
          />
        ) : (
          <div className="h-8 w-8 rounded" style={{ backgroundColor: color }} />
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{title}</span>
          {description && (
            <span className="text-sm font-semibold text-gray-400">
              {description}
            </span>
          )}
        </div>
      </div>
      {installed ? (
        <Button variant="alt-primary" as="a" href={link} target="_blank">
          Open App
        </Button>
      ) : (
        <Button variant="alt-primary" as="a" href={link} target="_blank">
          Install App
        </Button>
      )}
    </div>
  );
};

export default WayfindingAppLink;
