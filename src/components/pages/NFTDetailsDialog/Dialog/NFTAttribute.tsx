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

export interface NftAttributeProps {
  trait: string;
  value: string | number | boolean;
  occurrence?: string;
}

export const NFTAttribute: React.FC<NftAttributeProps> = ({ trait, value, occurrence }) => {
  return (
    <li className="w-fit rounded-xl border border-solid px-5 py-2 text-sm">
      <div className="flex justify-center font-bold text-muted-foreground">{`${trait}`}</div>
      <div className="flex justify-center">
        <p className="font-bold">
          {value}: <span className="text-muted-foreground">{occurrence}</span>
        </p>
      </div>
    </li>
  );
};
