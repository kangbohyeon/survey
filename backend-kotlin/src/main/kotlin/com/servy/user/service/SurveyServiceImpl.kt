package com.servy.user.service

import com.servy.user.DTO.*
import com.servy.user.repository.SurveyRepository
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class SurveyServiceImpl(
    private val surveyRepository: SurveyRepository
) : SurveyService {

    @Transactional(readOnly = true)
    override fun getSurveys(pageable: Pageable): SurveyListResponseVo {

        val surveys = surveyRepository.findAll(pageable)
        val pageVo = PageVo(
            first = surveys.isFirst,
            last = surveys.isLast,
            totalPages = surveys.totalPages,
            totalElements = surveys.totalElements,
            pageSize = surveys.size,
            pageNumber = surveys.pageable.pageNumber
        )

        val surveyResponseVos =
            surveys.content.map { survey ->
                SurveyResponseVo(id = survey.id, title = survey.title,
                    questions = survey.questions.map { question ->

                        Questions(
                            title = question.title,
                            desc = question.desc,
                            type = question.type,
                            required = question.required,
                            option =
                            Option(
                                max = question.option.max,
                                placeHolder = question.option.placeholder,
                                items = question.option.items?.map { item ->
                                    item.item
                                }?.toList()
                            )
                        )

                    })
            }.toList()

        return SurveyListResponseVo(page = pageVo, content = surveyResponseVos)

    }

}