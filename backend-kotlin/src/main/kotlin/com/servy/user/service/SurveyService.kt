package com.servy.user.service

import com.servy.user.DTO.SurveyListResponseVo
import org.springframework.data.domain.Pageable

interface SurveyService {
     fun getSurveys(pageable: Pageable): SurveyListResponseVo
}