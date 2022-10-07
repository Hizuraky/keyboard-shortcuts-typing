<?php

namespace App\Http\Resources\App;

use Illuminate\Http\Resources\Json\JsonResource;

class NoPlayRankingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'icon' => $this->icon,
            'challenger' => $this->ranking->count(),
            'myRank' => [
                'rank' => 0,
                'score' => 0,
            ],
            'ranking' => RankUserResource::collection($this->ranking),
        ];
    }
}
