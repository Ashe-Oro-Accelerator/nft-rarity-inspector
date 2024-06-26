/*-
 *
 * NFT Rarity Inspector
 *
 * Copyright (C) 2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { dictionary } from '@/libs/en';
import type { FontSpec } from 'chart.js';
import { Tooltip } from 'react-tooltip';

export const YAxisDescription: React.FC<{ color: string; font: Partial<FontSpec>; tooltipText: string }> = ({ color, font, tooltipText }) => {
  return (
    <>
      <a data-tooltip-id="y-axis-tooltip" data-tooltip-content={tooltipText}>
        <div
          style={{
            fontFamily: font.family,
            fontSize: font.size,
            fontStyle: font.style,
            lineHeight: font.lineHeight,
            color,
          }}
        >
          {dictionary.nftPreviewPage.rarityChartLabels.yAxesLabel}
        </div>
      </a>
      <Tooltip id="y-axis-tooltip" />
    </>
  );
};
